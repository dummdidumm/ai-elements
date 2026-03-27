<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('w-full rounded-md border bg-background', className)}
	data-slot="model-selector"
	{...rest}
>
	{@render children?.()}
</div>
