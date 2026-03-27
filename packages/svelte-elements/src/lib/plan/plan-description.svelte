<script lang="ts">
	import * as Card from '../components/ui/card/index.js';
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Shimmer from '../components/shimmer.svelte';
	import { usePlan } from './plan-context.js';
	import { cn } from '../utils.js';

	type Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
		children: Snippet;
	};

	let { class: className, children, ...rest }: Props = $props();
	const { isStreaming } = usePlan();
</script>

<Card.Description
	class={cn('text-muted-foreground text-sm text-balance', className)}
	data-slot="plan-description"
	{...rest}
>
	{#if isStreaming}
		<Shimmer>{@render children()}</Shimmer>
	{:else}
		{@render children()}
	{/if}
</Card.Description>
