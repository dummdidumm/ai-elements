<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: SVGAttributes<SVGSVGElement> = $props();
</script>

/* React Flow edge rendering is simplified to a static SVG primitive in Svelte. */
<svg class={cn('text-ring h-16 w-full', className)} data-slot="edge" viewBox="0 0 240 80" {...rest}>
	<path d="M8 24 C 120 24 120 56 232 56" fill="none" stroke="currentColor" stroke-width="1.5" />
	{#if children}
		{@render children()}
	{/if}
</svg>
