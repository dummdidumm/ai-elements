<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-card inline-flex items-center gap-1 rounded-md border p-1', className)}
	data-slot="controls"
	{...rest}
>
	{@render children?.()}
</div>
