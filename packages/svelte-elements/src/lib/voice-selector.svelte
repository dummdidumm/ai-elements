<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-background w-full rounded-md border', className)}
	data-slot="voice-selector"
	{...rest}
>
	{@render children?.()}
</div>
