<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let {
		class: className,
		language,
		style: userStyle,
		children,
		...rest
	}: HTMLAttributes<HTMLDivElement> & {
		language: string;
		children?: import('svelte').Snippet;
	} = $props();
</script>

<div
	class={cn(
		'group bg-background text-foreground relative w-full overflow-hidden rounded-md border',
		className
	)}
	data-language={language}
	style:contain-intrinsic-size="auto 200px"
	style:content-visibility="auto"
	style={userStyle}
	{...rest}
>
	{@render children?.()}
</div>
