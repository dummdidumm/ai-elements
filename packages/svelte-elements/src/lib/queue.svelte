<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('flex flex-col gap-2 rounded-xl border bg-background px-3 py-2 shadow-xs', className)}
	data-slot="queue"
	{...rest}
>
	{@render children?.()}
</div>
