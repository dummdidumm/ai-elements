<script lang="ts">
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

<div class={cn('leading-none font-semibold', className)} data-slot="plan-title" {...rest}>
	{#if isStreaming}
		<Shimmer>{@render children()}</Shimmer>
	{:else}
		{@render children()}
	{/if}
</div>
