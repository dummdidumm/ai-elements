<script lang="ts">
	import * as Card from '../components/ui/card/index.js';
	import * as Collapsible from '../components/ui/collapsible/index.js';
	import type { HTMLAttributes } from 'svelte/elements';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<Collapsible.Content>
	<Card.Content {...rest} class={cn('px-6', className)} data-slot="plan-content">
		{@render children?.()}
	</Card.Content>
</Collapsible.Content>
