<script lang="ts">
	import { clock } from '$lib/scripts/clock.svelte';
</script>

<div
	class="relative size-[97px] border border-black bg-ds-bg/50"
	style:box-shadow="0px 0px 0px 1px #d3d3d3,0px 0px 0px 2px #e3e3e3"
>
	<!-- center dot, hands -->
	<div class="absolute top-0 left-0 z-10 grid size-full place-content-center">
		<div class="relative flex size-[5px] items-end justify-center bg-ds-clock-center">
			<div
				class="absolute bottom-px -z-10 ml-[3px] h-6 w-0.5 origin-bottom bg-ds-clock-dot"
				style:rotate={`${(clock.hours % 12) / 12}turn`}
			></div>
			<div
				class="absolute bottom-px -z-10 ml-[3px] h-8 w-0.5 origin-bottom bg-ds-clock-dot"
				style:rotate={`${clock.minutes / 60}turn`}
			></div>
			<div
				class="absolute bottom-px -z-10 ml-[3px] h-9 w-0.5 origin-bottom bg-ds-theme-slate"
				style:rotate={`${clock.seconds / 60}turn`}
			></div>
		</div>
	</div>
	<!-- clock numbers -->
	<div
		class="absolute top-0 left-0.5 flex size-full flex-col items-center justify-between font-clock text-xl leading-none tracking-tighter text-ds-clock"
	>
		<span class="pt-[5px]">12</span>
		<div class="flex w-full justify-between px-px">
			<span>9</span>
			<span class="pr-0.5">3</span>
		</div>
		<span class="pb-px">6</span>
	</div>
	<!-- clock number dots -->
	<div class="absolute flex size-full flex-col items-center">
		<div class="flex h-1/5 w-1/2 items-center justify-between">
			{@render dotPair()}
		</div>
		<div class="flex h-1/5 w-5/6 items-center justify-between">
			{@render dotPair()}
		</div>
		<hr class="h-1/4" />
		<div class="flex h-1/5 w-5/6 items-center justify-between">
			{@render dotPair()}
		</div>
		<div class="flex h-1/5 w-1/2 items-center justify-between">
			{@render dotPair()}
		</div>
	</div>
</div>

{#snippet dotPair()}
	<span class="size-1 bg-ds-clock-dot"></span>
	<span class="size-1 bg-ds-clock-dot"></span>
{/snippet}
