<script lang="ts">
	import type { HTMLOptionAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let {
		class: className,
		children,
		...rest
	}: HTMLOptionAttributes & { children?: import('svelte').Snippet } = $props();
</script>

<option class={cn('text-xs', className)} {...rest}>
	{@render children?.()}
</option>
