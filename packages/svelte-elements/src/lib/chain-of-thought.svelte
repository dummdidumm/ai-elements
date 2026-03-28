<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('not-prose w-full space-y-3 text-sm', className)}
	data-slot="chain-of-thought"
	{...rest}
>
	{@render children?.()}
</div>
