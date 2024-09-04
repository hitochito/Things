<script lang="ts">
	import { images } from '$lib/assets';
	import { CldOgImage } from 'svelte-cloudinary';

	export let title = 'Things - another To-Do app';
	export let description =
		'This app is built using Sveltekit. As mentioned on Discord, this is a todo list with add, complete, and delete options, plus optional drag-and-drop reordering and offline functionality.';
	export let src = images.ogImageThings;
	export let height = 630;
	export let width = 1200;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<!-- Open Graph Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />

	<!-- Twitter Card Tags -->
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
</svelte:head>

<CldOgImage {title} {src} twitterTitle={title} {height} {width} />
