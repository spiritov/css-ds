<script lang="ts">
	import BottomScreen from '$lib/components/screens/BottomScreen.svelte';
	import TopScreen from '$lib/components/screens/TopScreen.svelte';
	import { clock } from '$lib/scripts/clock.svelte';
	import { getInitBottomGrid, getInitTopGrid } from '$lib/scripts/grids';
	import { fade } from 'svelte/transition';

	let topGrid: Cell[][] = $state(getInitTopGrid());
	let bottomGrid: Cell[][] = $state(getInitBottomGrid());

	// update clock
	$effect(() => {
		const secondsTimer = setInterval(() => {
			clock.seconds++;
			if (clock.seconds >= 60) {
				// account for timer setInterval drift every new minute
				const now = new Date();
				clock.date = now;
				clock.seconds = now.getSeconds();
				clock.minutes = now.getMinutes();
				clock.hours = now.getHours();
			}
		}, 1000);

		return () => {
			clearInterval(secondsTimer);
		};
	});
</script>

<div transition:fade|global={{ duration: 250 }} class="mt-64 flex scale-200 items-end justify-center">
	<div class="flex flex-col">
		<TopScreen bind:grid={topGrid} />

		<BottomScreen bind:grid={bottomGrid} />
	</div>
</div>
