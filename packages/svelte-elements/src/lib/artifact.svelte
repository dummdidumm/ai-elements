<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm', className)}
	data-slot="artifact"
	{...rest}
>
	{@render children?.()}
</div>
