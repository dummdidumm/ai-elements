<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>


<div
	class={cn('flex items-start flex-wrap gap-2', className)}
	data-slot="attachments"
	{...rest}
>
	{@render children?.()}
</div>
