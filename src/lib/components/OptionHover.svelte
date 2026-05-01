<script lang="ts">
	import tl from '$lib/assets/theme/option_hover/tl.png';
	import { fade } from 'svelte/transition';
	type Props = {
		grid: Cell[][];
		x: number;
		y: number;
	};

	let { grid, x, y }: Props = $props();
	function getTwSize(): string {
		const component = grid[x][y];
		if (component === 'gamepak' || component === 'ds_card') {
			return 'w-48 h-12';
		}
		if (component === 'pictochat' || component === 'textnotes') {
			return 'w-24 h-12';
		}
		if (component === 'brightness' || component === 'alarm') {
			return 'w-7.5 h-6';
		}
		if (component === 'settings') {
			return 'w-7.5 h-6';
		}
		return 'size-12';
	}

	function inputKey(key: string): void {
		if (key === 'a' || key === 'leftarrow') {
			for (let i = 1; i <= y; i++) {
				if (grid[x][y - i] !== null) {
					y = y - i;
					return;
				}
			}
		} else if (key === 'd' || key === 'rightarrow') {
			for (let i = 1; i < grid[x].length - y; i++) {
				if (grid[x][y + i] !== null) {
					y = y + i;
					return;
				}
			}
		} else if (key === 'w' || key === 'uparrow') {
			for (let i = 1; i <= x; i++) {
				if (grid[x - i][y] !== null) {
					x = x - i;
					return;
				}
			}
		} else if (key === 's' || key === 'downarrow') {
			for (let i = 1; i < grid.length - x; i++) {
				if (grid[x + i][y] !== null) {
					x = x + i;
					return;
				}
			}
		} else if (key === 'z' || key === 'enter') {
			// todo: option selected
			return;
		}
		return;
	}
</script>

<svelte:document onkeydown={(event) => inputKey(event.key.toLowerCase())} />

<div
	class="pointer-events-none absolute z-20 border-0 outline-0 transition-all duration-500 ease-[cubic-bezier(0.1,0.5,0.05,1)] {getTwSize()}"
	transition:fade|global={{ duration: 250, delay: 250 }}
	style:left={`${(x === 4 ? (y === 0 ? 1 : y === 3 ? -31 : y === 5 ? -14 : -16) : -16) + y * 48}px`}
	style:top={`${-24 + x * 48}px`}
>
	<!-- tl -->
	<div
		class="absolute -top-px -left-px size-[11px] bg-ds-theme-slate bg-blend-luminosity"
		style:background-image="url({tl})"
		style:image-rendering="pixelated"
		style:clip-path="polygon(1px 0%, 100% 0%, 100% 5px, 5px 5px, 5px 100%, 0% 100%, 0% 1px, 1px 1px)"
	></div>
	<!-- tr -->
	<div
		class="absolute -top-px right-0 size-[11px] rotate-90 bg-ds-theme-slate bg-blend-luminosity"
		style:background-image="url({tl})"
		style:image-rendering="pixelated"
		style:clip-path="polygon(1px 0%, 100% 0%, 100% 5px, 5px 5px, 5px 100%, 0% 100%, 0% 1px, 1px 1px)"
	></div>
	<!-- br -->
	<div
		class="absolute right-0 bottom-0 size-[11px] rotate-180 bg-ds-theme-slate bg-blend-luminosity"
		style:background-image="url({tl})"
		style:image-rendering="pixelated"
		style:clip-path="polygon(1px 0%, 100% 0%, 100% 5px, 5px 5px, 5px 100%, 0% 100%, 0% 1px, 1px 1px)"
	></div>
	<!-- bl -->
	<div
		class="absolute bottom-0 -left-px size-[11px] rotate-270 bg-ds-theme-slate bg-blend-luminosity"
		style:background-image="url({tl})"
		style:image-rendering="pixelated"
		style:clip-path="polygon(1px 0%, 100% 0%, 100% 5px, 5px 5px, 5px 100%, 0% 100%, 0% 1px, 1px 1px)"
	></div>
</div>
