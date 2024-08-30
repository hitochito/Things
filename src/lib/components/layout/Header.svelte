<script lang="ts">
	import { page } from '$app/stores';
	import { Iconify } from '$lib/components';
	import { type IconName } from '$lib/types/iconTypes';
	import appIcon from '$lib/assets/images/icon.png?enhanced';

	const navItems: Array<{ href: string; label: string; icon: IconName }> = [
		{ href: '/', label: 'Home', icon: 'home' },
		{ href: '/about', label: 'About', icon: 'about' }
	];
</script>

<header>
	<div class="corner">
		<a
			class="flex gap-4 px-0 h-full items-center font-bold text-xs uppercase tracking-widest no-underline transition-colors duration-200 ease-linear hover:text-primary"
			href="https://github.com/sveltejs/kit"
			target="_blank"
			aria-label="GitHub"
		>
			<enhanced:img src={appIcon} alt="Things - Todo App Logo" class="w-9 h-9" />
			<p class="mt-1 hidden md:block text-base">Things</p>
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			{#each navItems as { href, label, icon }}
				<li
					aria-current={$page.url.pathname === href ||
					($page.url.pathname.startsWith(href) && href !== '/')
						? 'page'
						: undefined}
				>
					<a class="anchor anchor-text" {href}>{label}</a>
					<a class="anchor anchor-icon" {href}><Iconify {icon} /></a>
				</li>
			{/each}
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a
			class="flex anchor gap-4"
			href="https://github.com/sveltejs/kit"
			target="_blank"
			aria-label="GitHub"
		>
			<p class="mt-1 hidden md:block text-base">Source</p>
			<Iconify class="text-3xl bg-white rounded-full" icon="github" />
		</a>
	</div>
</header>

<style lang="postcss">
	header {
		@apply flex justify-between;
	}

	.corner {
		@apply px-1 md:px-3 md:py-2;
	}

	.corner a {
		@apply flex items-center justify-center w-full h-full;
	}

	nav {
		@apply flex justify-center;
	}

	svg {
		@apply w-8 h-12 block;
	}

	path {
		@apply fill-muted;
	}

	ul {
		@apply relative p-0 m-0 h-12 flex justify-center items-center list-none bg-muted bg-contain;
	}

	li {
		@apply relative h-full;
	}

	li[aria-current='page']::before {
		@apply content-[''] w-0 h-0 absolute top-0 left-[calc(50%-6px)] border-[6px] border-solid border-transparent border-t-primary;
	}

	.anchor {
		@apply h-full items-center px-2 font-bold text-xs uppercase tracking-widest no-underline transition-colors duration-200 ease-linear hover:text-primary;
	}
	.anchor-text {
		@apply hidden md:flex;
	}
	.anchor-icon {
		@apply flex md:hidden text-2xl;
	}
</style>
