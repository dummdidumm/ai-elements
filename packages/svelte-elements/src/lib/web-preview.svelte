<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-card flex size-full flex-col rounded-lg border', className)}
	data-slot="web-preview"
	{...rest}
>
	{@render children?.()}
</div>
