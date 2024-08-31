<script lang="ts">
	import '@fontsource-variable/grandstander'; // weights 100-900;
	import { Header, Footer, ModeToggle, LoadingSpinner } from '$lib/components';
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';

	// Progress Loader While Navigating Between Pages
	import { navigating } from '$app/stores';
	import '$lib/utils/nprogress/nprogress.css';
	import NProgress from '$lib/utils/nprogress/nprogress';

	NProgress.configure({
		minimum: 0.56,
		showSpinner: false
	});

	$effect(() => {
		if ($navigating) {
			NProgress.start();
		} else NProgress.done();
	});
</script>

<ModeWatcher />

<LoadingSpinner>
	<div class="app">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</LoadingSpinner>

<ModeToggle />

<style lang="postcss">
	.app {
		@apply flex min-h-screen flex-col;
	}

	main {
		@apply mx-auto flex w-full max-w-4xl flex-1 flex-col p-5;
	}
</style>
