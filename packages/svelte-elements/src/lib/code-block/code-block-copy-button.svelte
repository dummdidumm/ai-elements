<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import Copy from 'lucide-svelte/icons/copy';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';
	import { getCodeBlockContext } from './code-block-context.js';

	let {
		onCopy,
		onError,
		timeout = 2000,
		children,
		class: className,
		disabled,
		type = 'button',
		...rest
	}: HTMLButtonAttributes & {
		onCopy?: () => void;
		onError?: (error: Error) => void;
		timeout?: number;
		children?: import('svelte').Snippet;
	} = $props();

	const ctx = getCodeBlockContext();

	let isCopied = $state(false);
	let timeoutId = $state<number | undefined>(undefined);

	$effect(() => {
		return () => {
			if (timeoutId !== undefined) {
				clearTimeout(timeoutId);
			}
		};
	});

	async function copyToClipboard() {
		if (typeof window === 'undefined' || !navigator?.clipboard?.writeText) {
			onError?.(new Error('Clipboard API not available'));
			return;
		}

		try {
			if (!isCopied) {
				await navigator.clipboard.writeText(ctx.code);
				isCopied = true;
				onCopy?.();
				timeoutId = window.setTimeout(() => {
					isCopied = false;
				}, timeout);
			}
		} catch (error) {
			onError?.(error instanceof Error ? error : new Error(String(error)));
		}
	}
</script>

<button
	aria-label={isCopied ? 'Copied' : 'Copy code'}
	class={cn(
		'inline-flex size-9 shrink-0 items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors',
		'hover:bg-accent hover:text-accent-foreground',
		'focus-visible:ring-ring/50 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:outline-1',
		'disabled:pointer-events-none disabled:opacity-50',
		'[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=size-])]:size-4',
		className
	)}
	{type}
	{disabled}
	onclick={copyToClipboard}
	{...rest}
>
	{#if children}
		{@render children()}
	{:else if isCopied}
		<Check size={14} />
	{:else}
		<Copy size={14} />
	{/if}
</button>
