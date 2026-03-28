<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={cn('relative flex-1 overflow-y-auto', className)} data-slot="conversation" {...rest}>
	{@render children?.()}
</div>
