<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import type { ComponentProps } from 'svelte';
	import { setPlanContext } from './plan-context.js';
	import { cn } from '../utils.js';

	type Props = ComponentProps<typeof Collapsible.Root> & {
		isStreaming?: boolean;
	};

	let { class: className, isStreaming = false, children, ...rest }: Props = $props();

	const plan = $state({ isStreaming: false });
	$effect(() => {
		plan.isStreaming = isStreaming;
	});
	setPlanContext(plan);
</script>

<Collapsible.Root data-slot="plan" {...rest}>
	{#snippet child({ props })}
		<div
			{...props}
			class={cn(
				'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-none',
				className
			)}
		>
			{@render children?.()}
		</div>
	{/snippet}
</Collapsible.Root>
