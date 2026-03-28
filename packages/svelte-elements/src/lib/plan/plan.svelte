<script lang="ts">
	import * as Collapsible from '../components/ui/collapsible/index.js';
	import * as Card from '../components/ui/card/index.js';
	import type { PlanProps } from './types.js';
	import { setPlanContext } from './plan-context.js';
	import { cn } from '../utils.js';

	let { class: className, isStreaming = false, children, ...rest }: PlanProps = $props();

	const plan = $state({ isStreaming: false });
	$effect(() => {
		plan.isStreaming = isStreaming;
	});
	setPlanContext(plan);
</script>

<Collapsible.Root {...rest}>
	<Card.Root class={cn('flex flex-col border shadow-none ring-0', className)} data-slot="plan">
		{@render children?.()}
	</Card.Root>
</Collapsible.Root>
