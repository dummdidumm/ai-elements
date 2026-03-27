<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-background rounded-lg border font-mono text-sm', className)}
	data-slot="file-tree"
	{...rest}
>
	{@render children?.()}
</div>
