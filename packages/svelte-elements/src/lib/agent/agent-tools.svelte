<script lang="ts">
	import * as Accordion from '../components/ui/accordion/index.js';
	import type { AgentToolsProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: AgentToolsProps = $props();
</script>

<div class={cn('space-y-2', className)} data-slot="agent-tools">
	<span class="text-muted-foreground text-sm font-medium">Tools</span>
	<Accordion.Root class="rounded-md border" {...rest}>
		{@render children?.()}
	</Accordion.Root>
</div>
