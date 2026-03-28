<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: SVGAttributes<SVGSVGElement> = $props();
</script>

<svg
	class={cn('text-ring h-16 w-full', className)}
	data-slot="connection"
	viewBox="0 0 240 80"
	{...rest}
>
	<path d="M8 56 C 120 56 120 24 232 24" fill="none" stroke="currentColor" stroke-width="1.5" />
	<circle cx="232" cy="24" r="3" fill="currentColor" />
	{#if children}
		{@render children()}
	{/if}
</svg>
