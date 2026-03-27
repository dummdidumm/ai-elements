<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn('bg-background rounded-lg border p-4', className)}
	data-slot="package-info"
	{...rest}
>
	{@render children?.()}
</div>
