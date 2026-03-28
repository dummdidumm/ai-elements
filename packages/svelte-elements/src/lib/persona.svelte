<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn(
		'bg-muted inline-flex size-16 shrink-0 items-center justify-center rounded-full border text-xs',
		className
	)}
	data-slot="persona"
	{...rest}
>
	{@render children?.()}
</div>
