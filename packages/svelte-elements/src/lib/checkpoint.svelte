<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('text-muted-foreground flex items-center gap-1', className)}
	data-slot="checkpoint"
	{...rest}
>
	{@render children?.()}
</div>
