<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
</script>


<span
	class={cn('group inline items-center gap-1', className)}
	data-slot="inline-citation"
	{...rest}
>
	{@render children?.()}
</span>
