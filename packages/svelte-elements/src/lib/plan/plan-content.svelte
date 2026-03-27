<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<Collapsible.Content>
	{#snippet child({ props })}
		<div {...props} {...rest} class={cn('px-6', className)} data-slot="plan-content">
			{@render children?.()}
		</div>
	{/snippet}
</Collapsible.Content>
