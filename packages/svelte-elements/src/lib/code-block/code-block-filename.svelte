<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let {
		class: className,
		children,
		...rest
	}: HTMLAttributes<HTMLSpanElement> & { children?: import('svelte').Snippet } = $props();
</script>

<span class={cn('font-mono', className)} {...rest}>
	{@render children?.()}
</span>
