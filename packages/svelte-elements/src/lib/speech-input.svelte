<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLButtonElement> = $props();
</script>

<button
	class={cn(
		'bg-primary text-primary-foreground inline-flex size-10 items-center justify-center rounded-full border',
		className
	)}
	data-slot="speech-input"
	type="button"
	{...rest}
>
	{@render children?.()}
</button>
