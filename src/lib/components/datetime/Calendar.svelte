<script lang="ts">
	const width: number = 113;

	import current_day from '$lib/assets/theme/current_day.png';
	import current_day_border from '$lib/assets/theme/current_day_border.png';

	import { clock } from '$lib/scripts/clock.svelte';

	let firstDay: number = $derived(new Date(clock.date.getFullYear(), clock.date.getMonth()).getDate());
	let lastDay: number = $derived(new Date(clock.date.getFullYear(), clock.date.getMonth() + 1, 0).getDate());
</script>

<!-- calendar header -->
<div
	class="relative z-10 h-4 border border-ds-small-grid-border bg-ds-bg text-center text-lg leading-3.5 tracking-[2px]"
>
	{(clock.date.getMonth() + 1).toString().padStart(2, '0')}/{clock.date.getFullYear()}
</div>
<!-- inner calendar -->
<div class="relative h-24 bg-ds-bg" style:box-shadow="0px 0px 0px 1px #d3d3d3,0px 0px 0px 2px #e3e3e3" style:width>
	<!-- days of week header -->
	<div class="grid grid-cols-7 grid-rows-1 gap-px border bg-black">
		{@render dayOfWeek('Su')}
		{@render dayOfWeek('Mo')}
		{@render dayOfWeek('Tu')}
		{@render dayOfWeek('We')}
		{@render dayOfWeek('Th')}
		{@render dayOfWeek('Fr')}
		{@render dayOfWeek('Sa')}
	</div>
	<!-- calendar days -->
	<div class="grid grid-cols-7 grid-rows-5 gap-px border border-t-0 bg-ds-calendar-grid-border">
		{#each { length: 35 }, i}
			{@const day = i - firstDay + 1}
			<div
				class="relative grid size-[15px] place-content-center text-sm
        {i % 7 === 0
					? 'bg-ds-calendar-bg-sunday text-ds-calendar-text-sunday'
					: i % 7 === 6
						? 'bg-ds-calendar-bg-saturday text-ds-calendar-text-saturday'
						: 'bg-ds-bg text-black'}"
			>
				<!-- todo: dashed border around current date -->
				{#if clock.date.getDate() === day + 1}
					<div class="absolute grid size-full place-items-center">
						<div
							class="relative z-10 size-[11px] bg-ds-theme-slate/50 bg-blend-luminosity"
							style:background-image="url({current_day})"
							style:image-rendering="pixelated"
						></div>
						<div
							class="absolute size-[13px] bg-ds-theme-slate bg-blend-luminosity"
							style:background-image="url({current_day_border})"
							style:image-rendering="pixelated"
						></div>
					</div>
				{/if}
				<span class="relative z-10 ml-px tracking-wide">
					{day < lastDay ? day + 1 : ''}
				</span>
			</div>
		{/each}
	</div>
</div>

{#snippet dayOfWeek(day: string)}
	<div
		class="grid size-[15px] place-content-center bg-ds-calendar-bg-header text-sm text-ds-bg first:bg-ds-calendar-header-bg-sunday last:bg-ds-calendar-header-bg-saturday"
	>
		{day}
	</div>
{/snippet}
