<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let {
		class: className,
		children,
		...rest
	}: HTMLAttributes<HTMLDivElement> & { children?: import('svelte').Snippet } = $props();
</script>

<div
	class={cn(
		'bg-muted/80 text-muted-foreground flex items-center justify-between border-b px-3 py-2 text-xs',
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
