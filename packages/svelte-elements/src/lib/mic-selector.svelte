<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

/* Media device enumeration popover is intentionally simplified for Svelte baseline parity. */
<div
	class={cn('inline-flex items-center gap-2 rounded-md border bg-background p-1', className)}
	data-slot="mic-selector"
	{...rest}
>
	{@render children?.()}
</div>
