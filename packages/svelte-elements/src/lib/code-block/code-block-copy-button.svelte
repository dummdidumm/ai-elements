<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import Copy from 'lucide-svelte/icons/copy';
	import { Button } from '../components/ui/button/index.js';
	import type { ButtonProps } from '../components/ui/button/index.js';
	import { cn } from '../utils.js';
	import { getCodeBlockContext } from './code-block-context.js';

	let {
		onCopy,
		onError,
		timeout = 2000,
		children,
		class: className,
		disabled,
		size = 'icon',
		variant = 'ghost',
		type = 'button',
		...rest
	}: ButtonProps & {
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

<Button
	aria-label={isCopied ? 'Copied' : 'Copy code'}
	class={cn('shrink-0', className)}
	{size}
	{variant}
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
</Button>
