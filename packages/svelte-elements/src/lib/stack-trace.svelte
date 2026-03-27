<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn(
		'not-prose bg-background w-full overflow-hidden rounded-lg border font-mono text-sm',
		className
	)}
	data-slot="stack-trace"
	{...rest}
>
	{@render children?.()}
</div>
