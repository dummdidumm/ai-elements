<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('flex size-full flex-col rounded-lg border bg-card', className)}
	data-slot="web-preview"
	{...rest}
>
	{@render children?.()}
</div>
