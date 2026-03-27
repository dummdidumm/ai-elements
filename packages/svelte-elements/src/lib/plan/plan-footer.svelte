<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('flex items-center px-6 [.border-t]:pt-6', className)}
	data-slot="plan-footer"
	{...rest}
>
	{@render children?.()}
</div>
