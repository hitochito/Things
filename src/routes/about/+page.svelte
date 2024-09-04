<script>
	import { LoadingSpinner } from '$lib/components';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<LoadingSpinner>
	<section>
		<h1>Is this a template?</h1>

		<p>
			Yes it is. I'm working on a Sveltekit x Pocketbase template (work in progress) and This app is
			cloned from it. You can find it <a href="https://github.com/hitochito/pocketkit" target="_blank"
				>Here!</a
			>
		</p>
	</section>
</LoadingSpinner>

<style lang="postcss">
	h1 {
		@apply mb-4 text-center text-3xl font-bold;
	}

	p {
		@apply text-center mb-4;
	}
	p a {
		@apply font-bold text-primary underline;
	}
</style>
