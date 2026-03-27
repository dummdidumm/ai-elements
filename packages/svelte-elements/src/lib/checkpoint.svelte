<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('flex items-center gap-1 text-muted-foreground', className)}
	data-slot="checkpoint"
	{...rest}
>
	{@render children?.()}
</div>
