<script lang="ts">
	import { onMount } from 'svelte';
	import Alarm from '../Alarm.svelte';
	import Brightness from '../Brightness.svelte';
	import TextNotes from '../TextNotes.svelte';
	import DSCard from '../DSCard.svelte';
	import GamePak from '../GamePak.svelte';
	import Pictochat from '../Pictochat.svelte';
	import SettingsIcon from '../SettingsIcon.svelte';
	import { fade } from 'svelte/transition';

	type Props = {
		component: string;
	};

	let { component }: Props = $props();

	let visible: boolean = $state(false);
	onMount(() => (visible = true));
</script>

{#if visible}
	<div class="relative top-px left-px z-10" transition:fade|global={{ duration: 250, delay: 250 }}>
		{#if component === 'ds_card'}
			<DSCard />
		{:else if component === 'pictochat'}
			<Pictochat />
		{:else if component === 'textnotes'}
			<TextNotes />
		{:else if component === 'gamepak'}
			<GamePak />
		{:else if component === 'settings'}
			<SettingsIcon />
		{:else if component === 'brightness'}
			<Brightness />
		{:else if component === 'alarm'}
			<Alarm />
		{/if}
	</div>
{/if}
