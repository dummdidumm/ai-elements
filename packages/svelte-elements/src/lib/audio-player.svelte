<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-background flex items-center gap-2 rounded-md border p-2', className)}
	data-slot="audio-player"
	{...rest}
>
	{@render children?.()}
</div>
