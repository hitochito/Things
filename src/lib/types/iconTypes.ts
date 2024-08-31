export const icons = {
	moon: 'lucide:moon',
	sun: 'lucide:sun',
	x: 'lucide:x',
	menu: 'lucide:menu',
	svelte: 'logos:svelte-icon',
	github: 'logos:github-icon',
	smile: 'twemoji:grinning-face-with-smiling-eyes',
	rocket: 'ic:round-rocket-launch',
	book: 'clarity:book-solid',
	home: 'typcn:home',
	about: 'typcn:info',
	delete: 'fa6-solid:trash',
	plus: 'fa6-solid:plus'
	// Add more icons here as needed
} as const;

export type IconName = keyof typeof icons;
