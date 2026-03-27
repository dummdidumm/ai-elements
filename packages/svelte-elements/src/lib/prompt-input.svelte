<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from './utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLFormElement> = $props();
</script>


<form
	class={cn('w-full', className)}
	data-slot="prompt-input"
	{...rest}
>
	{@render children?.()}
</form>
