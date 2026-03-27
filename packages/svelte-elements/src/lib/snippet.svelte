<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('flex items-center rounded-md border font-mono', className)}
	data-slot="snippet"
	{...rest}
>
	{@render children?.()}
</div>
