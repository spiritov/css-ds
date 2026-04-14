// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	// global app types
	type Cell = string | null;
	type ClockInfo = {
		hours: number;
		minutes: number;
		seconds: number;
	};
}

export {};
