<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={cn('not-prose mb-4 text-xs', className)} data-slot="sources" {...rest}>
	{@render children?.()}
</div>
