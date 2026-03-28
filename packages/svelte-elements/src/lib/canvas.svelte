<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-sidebar/50 relative min-h-64 w-full overflow-hidden rounded-md border', className)}
	data-slot="canvas"
	{...rest}
>
	{@render children?.()}
</div>
