<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-card relative rounded-md border p-3 shadow-sm', className)}
	data-slot="node"
	{...rest}
>
	{@render children?.()}
</div>
