<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm', className)}
	data-slot="open-in-chat"
	{...rest}
>
	{@render children?.()}
</div>
