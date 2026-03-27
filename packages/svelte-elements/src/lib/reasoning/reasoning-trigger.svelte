<script lang="ts">
	import * as Collapsible from '../components/ui/collapsible/index.js';
	import BrainIcon from 'lucide-svelte/icons/brain';
	import ChevronDownIcon from 'lucide-svelte/icons/chevron-down';
	import Shimmer from '../components/shimmer.svelte';
	import { useReasoning } from './reasoning-context.js';
	import type { ReasoningTriggerProps } from './types.js';
	import { cn } from '../utils.js';

	const defaultGetThinkingMessage = (isStreaming: boolean, duration?: number): string => {
		if (isStreaming || duration === 0) {
			return 'Thinking...';
		}
		if (duration === undefined) {
			return 'Thought for a few seconds';
		}
		return `Thought for ${duration} seconds`;
	};

	let {
		class: className,
		children,
		getThinkingMessage = defaultGetThinkingMessage,
		...rest
	}: ReasoningTriggerProps = $props();

	const { isStreaming, duration, isOpen } = useReasoning();
	const message = $derived(getThinkingMessage(isStreaming, duration));
</script>

<Collapsible.Trigger
	class={cn(
		'flex w-full items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground',
		className
	)}
	data-slot="reasoning-trigger"
	{...rest}
>
	{#if children}
		{@render children()}
	{:else}
		<BrainIcon class="size-4" />
		{#if isStreaming || message === 'Thinking...'}
			<Shimmer duration={1}>{message}</Shimmer>
		{:else}
			<p>{message}</p>
		{/if}
		<ChevronDownIcon
			class={cn('size-4 transition-transform', isOpen ? 'rotate-180' : 'rotate-0')}
		/>
	{/if}
</Collapsible.Trigger>
