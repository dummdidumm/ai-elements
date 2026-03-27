<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
	data-slot="plan-action"
	{...rest}
>
	{@render children?.()}
</div>
