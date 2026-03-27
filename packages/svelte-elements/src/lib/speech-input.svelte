<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLButtonElement> = $props();
</script>

/* Web Speech API orchestration from React is intentionally omitted in this Svelte baseline component. */
<button
	class={cn('inline-flex size-10 items-center justify-center rounded-full border bg-primary text-primary-foreground', className)}
	data-slot="speech-input"
	type="button"
	{...rest}
>
	{@render children?.()}
</button>
