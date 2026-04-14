<script lang="ts">
	import Clock from '$lib/components/datetime/Clock.svelte';
	import Calendar from '$lib/components/datetime/Calendar.svelte';
	import SystemBar from '../SystemBar.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	type Props = {
		component: string;
	};

	let { component }: Props = $props();
	let visible: boolean = $state(false);
	onMount(() => (visible = true));
</script>

{#if visible}
	<div class="relative -top-px -left-px z-10" transition:fade|global={{ duration: 250 }}>
		{#if component === 'clock'}
			<Clock />
		{:else if component === 'calendar'}
			<Calendar />
		{:else if component === 'system_bar'}
			<SystemBar />
		{/if}
	</div>
{/if}
