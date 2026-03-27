<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-background flex flex-col gap-2 rounded-xl border px-3 py-2 shadow-xs', className)}
	data-slot="queue"
	{...rest}
>
	{@render children?.()}
</div>
