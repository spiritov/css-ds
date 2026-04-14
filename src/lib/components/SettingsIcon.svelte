<script lang="ts">
	import settings from '$lib/assets/icons/system/settings.png';
	import settings_hold from '$lib/assets/icons/system/settings_hold.png';
	import settings_hold_off from '$lib/assets/icons/system/settings_hold_off.png';

	let held: boolean = $state(false);
	let hover: boolean = $state(false);
	let clicked: boolean = $state(false);
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<img
	src={!held ? settings : hover ? settings_hold : settings_hold_off}
	alt=""
	class="relative top-px -left-[1.5px] -translate-x-1/2 object-none select-none
  {clicked ? 'animate-[float-out_533ms_both_steps(32,start)]' : ''}"
	draggable={false}
	onmouseenter={() => (hover = true)}
	onmouseleave={() => (hover = false)}
	onmousedown={() => (held = true)}
	onclick={() => (clicked = true)}
/>

<svelte:document onmouseup={() => (held = false)} />
