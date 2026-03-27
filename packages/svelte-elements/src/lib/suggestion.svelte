<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLButtonElement> = $props();
</script>

<button
	class={cn('inline-flex items-center rounded-full border px-4 py-1.5 text-sm', className)}
	data-slot="suggestion"
	type="button"
	{...rest}
>
	{@render children?.()}
</button>
