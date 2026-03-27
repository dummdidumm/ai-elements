<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class={cn('rounded-md border p-3 text-sm', className)} data-slot="confirmation" {...rest}>
	{@render children?.()}
</div>
