<script lang="ts">
	import RenderBottomComponent from '$lib/components/screens/RenderBottomComponent.svelte';
	import { onMount } from 'svelte';
	import OptionHover from '../OptionHover.svelte';

	type Props = {
		grid: Cell[][];
	};
	let { grid = $bindable() }: Props = $props();

	let visible: boolean = $state(false);
	onMount(() => (visible = true));
</script>

<!-- todo: gradients don't fully extend to top corners -->
<div class="relative h-48 w-64 overflow-hidden">
	<div class="absolute grid h-60 w-72 grid-cols-6 grid-rows-5 divide-x divide-y">
		{#if visible}
			<OptionHover {grid} x={2} y={1} />
		{/if}
		{#each grid as col, x (x)}
			{#each col as component, y (y)}
				<div
					class="relative -top-6 -left-4 size-12 border-ds-large-grid-border after:absolute after:-right-0.5 after:-bottom-0.5 after:z-10 after:size-[3px] after:bg-ds-large-grid-border"
					style:background="repeating-linear-gradient(#ffffff, #ffffff 1px, #e3e3e3 1px, #e3e3e3 2px)"
				>
					{#if component}
						<div class="absolute">
							<RenderBottomComponent {component} />
						</div>
					{/if}
				</div>
			{/each}
		{/each}
	</div>
</div>
