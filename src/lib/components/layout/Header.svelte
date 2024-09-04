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
			class="flex h-full items-center gap-4 px-0 text-xs font-bold uppercase tracking-widest no-underline transition-colors duration-200 ease-linear hover:text-primary"
			href="https://things-alpha.vercel.app/"
			target="_blank"
			aria-label="Things - Todo App"
		>
			<enhanced:img src={appIcon} alt="Things - Todo App Logo" class="h-9 w-9" />
			<p class="mt-1 hidden text-base md:block">Things</p>
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
					<a class="anchor anchor-text" {href} aria-label={label}>{label}</a>
					<a class="anchor anchor-icon" {href} aria-label={label}><Iconify {icon} /></a>
				</li>
			{/each}
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a
			class="anchor flex gap-4"
			href="https://github.com/hitochito/Things"
			target="_blank"
			aria-label="Source Code"
		>
			<p class="mt-1 hidden text-base md:block">Source</p>
			<Iconify class="rounded-full bg-white text-3xl" icon="github" />
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
		@apply flex h-full w-full items-center justify-center;
	}

	nav {
		@apply flex justify-center;
	}

	svg {
		@apply block h-12 w-8;
	}

	path {
		@apply fill-muted;
	}

	ul {
		@apply relative m-0 flex h-12 list-none items-center justify-center bg-muted bg-contain p-0;
	}

	li {
		@apply relative h-full;
	}

	li[aria-current='page']::before {
		@apply absolute left-[calc(50%-6px)] top-0 h-0 w-0 border-[6px] border-solid border-transparent border-t-primary content-[''];
	}

	.anchor {
		@apply h-full items-center px-2 text-xs font-bold uppercase tracking-widest no-underline transition-colors duration-200 ease-linear hover:text-primary;
	}
	.anchor-text {
		@apply hidden md:flex;
	}
	.anchor-icon {
		@apply flex text-2xl md:hidden;
	}
</style>
