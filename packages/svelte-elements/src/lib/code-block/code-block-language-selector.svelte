<script lang="ts">
	/**
	 * Native `<select>` styled for the code block header. Replaces the React
	 * `CodeBlockLanguageSelector` + Radix/shadcn `Select` tree; compound
	 * `Trigger` / `Value` / `Content` wrappers are not used—use
	 * {@link CodeBlockLanguageSelectorItem} (`<option>`) children instead.
	 */
	import type { HTMLSelectAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let {
		class: className,
		children,
		...rest
	}: HTMLSelectAttributes & { children?: import('svelte').Snippet } = $props();
</script>

<select
	class={cn(
		'h-7 max-w-[12rem] rounded-md border-none bg-transparent px-2 text-xs shadow-none',
		'focus-visible:ring-ring/50 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:outline-1',
		className
	)}
	{...rest}
>
	{@render children?.()}
</select>
