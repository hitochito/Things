<script>
	import { LoadingSpinner } from '$lib/components';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<LoadingSpinner>
	<section>
		<h1>About this app</h1>

		<p>
			This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
			following into your command line and following the prompts:
		</p>

		<pre>npm create svelte@latest</pre>

		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don't need to load any JavaScript. Try viewing the page's source, or
			opening the devtools network panel and reloading.
		</p>

		<p>
			The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling.
			Try using it with JavaScript disabled!
		</p>
	</section>
</LoadingSpinner>

<style lang="postcss">
	h1 {
		@apply mb-4 text-center text-3xl font-bold;
	}

	p {
		@apply mb-4;
	}

	a {
		@apply text-blue-600 hover:underline;
	}

	pre {
		@apply mb-4 w-full overflow-x-auto rounded bg-white bg-opacity-45 p-2 text-base text-gray-800 shadow-md;
	}
</style>
