<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

/* Command/dialog wiring from the React version is intentionally simplified for Svelte baseline parity. */
<div
	class={cn('w-full rounded-md border bg-background', className)}
	data-slot="voice-selector"
	{...rest}
>
	{@render children?.()}
</div>
