<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

/* react-jsx-parser runtime rendering is not available; this component exposes slot-based Svelte content instead. */
<div
	class={cn('relative rounded-md border bg-background p-3', className)}
	data-slot="jsx-preview"
	{...rest}
>
	{@render children?.()}
</div>
