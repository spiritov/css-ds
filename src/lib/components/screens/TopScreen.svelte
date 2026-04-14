<script lang="ts">
	import RenderTopComponent from '$lib/components/screens/RenderTopComponent.svelte';

	type Props = {
		grid: Cell[][];
	};
	let { grid = $bindable() }: Props = $props();
</script>

<div class="relative h-48 w-64 overflow-hidden">
	<div class="absolute grid size-full grid-cols-16 grid-rows-12 divide-x divide-y">
		{#each grid as col, x (x)}
			{#each col as component, y (y)}
				<div
					class="border-ds-small-grid-border last:border-r last:border-b"
					style:background="repeating-linear-gradient(#ffffff, #ffffff 1px, #e3e3e3 1px, #e3e3e3 2px)"
				>
					{#if component}
						<div class="absolute">
							<RenderTopComponent {component} />
						</div>
					{/if}
				</div>
			{/each}
		{/each}
	</div>
</div>
