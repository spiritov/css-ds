import { SvelteDate } from 'svelte/reactivity';

type InternalClock = {
	date: Date;
	hours: number;
	minutes: number;
	seconds: number;
};

// updates every minute, except seconds
export const clock: InternalClock = $state({
	date: new SvelteDate(),
	hours: new SvelteDate().getHours(),
	minutes: new SvelteDate().getMinutes(),
	seconds: new SvelteDate().getSeconds()
});
