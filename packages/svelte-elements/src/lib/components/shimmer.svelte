<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	type As = keyof HTMLElementTagNameMap;

	type Props = {
		as?: As;
		/** Retained for parity with the React API; prefer `class` in Svelte */
		className?: string;
		duration?: number;
		spread?: number;
		children?: Snippet;
	} & HTMLAttributes<HTMLElement>;

	let {
		as = 'p',
		className,
		class: classProp,
		duration = 2,
		spread = 2,
		children,
		...rest
	}: Props = $props();

	let el: HTMLElement | undefined = $state();
	let dynamicSpreadPx = $state(0);

	$effect(() => {
		if (!el) {
			return;
		}
		const updateSpread = () => {
			dynamicSpreadPx = (el?.textContent?.length ?? 0) * spread;
		};
		updateSpread();
		const observer = new MutationObserver(updateSpread);
		observer.observe(el, {
			characterData: true,
			childList: true,
			subtree: true
		});
		return () => {
			observer.disconnect();
		};
	});
</script>

<svelte:element
	this={as}
	bind:this={el}
	class={cn(
		'relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent',
		'[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--color-background),#0000_calc(50%+var(--spread)))]',
		'[background-repeat:no-repeat,padding-box]',
		'text-shimmer-root',
		className,
		classProp
	)}
	style:--spread="{dynamicSpreadPx}px"
	style:--shimmer-duration="{duration}s"
	style:background-image={`var(--bg), linear-gradient(var(--color-muted-foreground), var(--color-muted-foreground))`}
	{...rest}
>
	{@render children?.()}
</svelte:element>

<style>
	.text-shimmer-root {
		animation: text-shimmer-bg var(--shimmer-duration, 2s) linear infinite;
	}

	@keyframes text-shimmer-bg {
		from {
			background-position: 100% center;
		}

		to {
			background-position: 0% center;
		}
	}
</style>
