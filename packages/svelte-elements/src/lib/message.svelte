<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('group flex w-full max-w-[95%] flex-col gap-2', className)}
	data-slot="message"
	{...rest}
>
	{@render children?.()}
</div>
