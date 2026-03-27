<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('flex items-center gap-1 rounded-sm border bg-background p-1.5', className)}
	data-slot="toolbar"
	{...rest}
>
	{@render children?.()}
</div>
