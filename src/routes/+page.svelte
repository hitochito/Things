<script lang="ts">
	import { Seo, LoadingSpinner } from '$lib/components';
	import Things from './Things.svelte';
</script>

<LoadingSpinner>
	<Things />
</LoadingSpinner>

<Seo />
