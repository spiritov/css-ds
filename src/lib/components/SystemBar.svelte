<script lang="ts">
	import battery_full from '$lib/assets/icons/systembar/battery_full.png';
	import gba_display_top from '$lib/assets/icons/systembar/gba_display_top.png';
	import startup_manual from '$lib/assets/icons/systembar/startup_manual.png';
	import system_bar from '$lib/assets/theme/system_bar.png';
	import system_bar_border from '$lib/assets/system_bar_border.png';

	import { clock } from '$lib/scripts/clock.svelte';
	import { fly } from 'svelte/transition';
	import { linear } from 'svelte/easing';
</script>

<div
	class="relative top-px left-px grid h-4 w-64 grid-cols-16 grid-rows-1 place-content-center border-b border-b-black bg-ds-theme-slate bg-bottom text-base leading-4 text-white bg-blend-luminosity"
	style:background-image="url({system_bar})"
	style:image-rendering="pixelated"
	transition:fly|global={{ delay: 250, duration: 1000 / 6, y: -16, easing: linear, opacity: 1 }}
>
	<!-- name -->
	<div class="col-span-9 ml-[3px] flex">
		dreamyard
		{@render systemBarBorder()}
	</div>
	<!-- time -->
	<div class="col-span-2 flex items-center">
		<!-- todo: dot is centered, not the full time -->
		<div class="flex w-full justify-center">
			<span class="ml-px">{clock.hours.toString().padStart(2, '0')}</span>
			<span class="animate-[blink_1s_infinite]">:</span>
			<span class="">{clock.minutes.toString().padStart(2, '0')}</span>
		</div>
		{@render systemBarBorder()}
	</div>
	<!-- month & day -->
	<div class="col-span-2 flex items-center">
		<span class="flex w-full justify-center">
			{(clock.date.getMonth() + 1).toString().padStart(2, '0')}/{clock.date.getDate().toString().padStart(2, '0')}
		</span>
		{@render systemBarBorder()}
	</div>
	<!-- gba screen display mode -->
	<div class="flex">
		<img src={gba_display_top} alt="" />
		{@render systemBarBorder()}
	</div>
	<!-- startup / auto mode -->
	<div class="flex">
		<img src={startup_manual} alt="" />
		{@render systemBarBorder()}
	</div>
	<!-- battery level -->
	<div class="flex">
		<img src={battery_full} alt="" />
	</div>
</div>

{#snippet systemBarBorder()}
	<img src={system_bar_border} alt="" class="ml-auto object-none" />
{/snippet}
