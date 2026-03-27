<script lang="ts">
	import { Button } from '../components/ui/button/index.js';
	import * as Collapsible from '../components/ui/collapsible/index.js';
	import ChevronsUpDownIcon from 'lucide-svelte/icons/chevrons-up-down';
	import type { PlanTriggerProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: PlanTriggerProps = $props();
</script>

<Collapsible.Trigger {...rest}>
	{#snippet child({ props })}
		<Button
			{...props}
			class={cn(
				'shrink-0',
				className
			)}
			variant="ghost"
			size="icon-sm"
			data-slot="plan-trigger"
		>
			{#if children}
				{@render children()}
			{:else}
				<ChevronsUpDownIcon class="size-4" />
				<span class="sr-only">Toggle plan</span>
			{/if}
		</Button>
	{/snippet}
</Collapsible.Trigger>
