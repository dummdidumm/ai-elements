<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

/* ansi-to-react formatting is omitted; pass preformatted output via children for full control. */
<div
	class={cn('flex flex-col overflow-hidden rounded-lg border bg-zinc-950 text-zinc-100', className)}
	data-slot="terminal"
	{...rest}
>
	{@render children?.()}
</div>
