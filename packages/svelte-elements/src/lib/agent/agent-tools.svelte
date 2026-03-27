<script lang="ts">
	import { Accordion } from 'bits-ui';
	import type { AgentToolsProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: AgentToolsProps = $props();
</script>

<div class={cn('space-y-2', className)} data-slot="agent-tools">
	<span class="font-medium text-muted-foreground text-sm">Tools</span>
	<Accordion.Root class="rounded-md border" type="multiple" {...rest}>
		{@render children?.()}
	</Accordion.Root>
</div>
