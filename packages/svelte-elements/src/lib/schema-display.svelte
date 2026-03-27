<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('overflow-hidden rounded-lg border bg-background', className)}
	data-slot="schema-display"
	{...rest}
>
	{@render children?.()}
</div>
