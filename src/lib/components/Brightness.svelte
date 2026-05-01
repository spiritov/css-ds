<script lang="ts">
	import brightness from '$lib/assets/icons/system/brightness.png';
	import { store } from '$lib/scripts/store.svelte';
</script>

<div class="flex size-12 items-start justify-end">
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<img
		src={brightness}
		alt=""
		class="relative object-none px-3 py-1.5 select-none"
		draggable={false}
		onclick={() => {
			store.darkmode = !store.darkmode;
		}}
	/>
</div>
