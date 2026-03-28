<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-background inline-flex items-center gap-2 rounded-md border p-1', className)}
	data-slot="mic-selector"
	{...rest}
>
	{@render children?.()}
</div>
