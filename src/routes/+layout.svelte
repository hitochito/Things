<script lang="ts">
	import '@fontsource-variable/grandstander'; // weights 100-900;
	import { Header, Footer, ModeToggle } from '$lib/components';
	import { ModeWatcher } from 'mode-watcher';
	import { onMount } from 'svelte';
	import '../app.css';

	// Progress Loader While Navigating Between Pages
	import { navigating } from '$app/stores';
	import '$lib/utils/nprogress/nprogress.css';
	import NProgress from '$lib/utils/nprogress/nprogress';

	NProgress.configure({
		minimum: 0.56,
		showSpinner: false
	});

	let { children } = $props();

	$effect(() => {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	});

	async function detectServiceWorkerUpdate() {
		const registration = await navigator.serviceWorker.ready;
		registration.addEventListener('updatefound', () => {
			const newSw = registration.installing;
			newSw?.addEventListener('statechange', () => {
				if (newSw?.state === 'installed') {
					if (confirm('New Update Available. Load New Version?')) {
						newSw.postMessage({ type: 'SKIP_WAITING' });
						window.location.reload();
					}
				}
			});
		});
	}

	onMount(() => {
		detectServiceWorkerUpdate();
	});
</script>

<ModeWatcher />

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<ModeToggle />

<style lang="postcss">
	.app {
		@apply flex min-h-screen flex-col;
	}

	main {
		@apply mx-auto flex w-full max-w-4xl flex-1 flex-col p-5;
	}
</style>
