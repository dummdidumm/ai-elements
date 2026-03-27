<script lang="ts">
	import * as Accordion from '../components/ui/accordion/index.js';
	import type { AgentToolProps } from './types.js';
	import { CodeBlock } from '../code-block/index.js';
	import { cn } from '../utils.js';

	let { class: className, tool, value, children, ...rest }: AgentToolProps = $props();

	const schema = $derived(
		'jsonSchema' in tool && tool.jsonSchema ? tool.jsonSchema : tool.inputSchema
	);
</script>

<Accordion.Item
	class={cn('border-b last:border-b-0', className)}
	{value}
	data-slot="agent-tool"
	{...rest}
>
	<Accordion.Trigger
		class="items-center px-3 py-2 text-left text-sm font-medium transition-all hover:no-underline"
	>
		{tool.description ?? 'No description'}
	</Accordion.Trigger>
	<Accordion.Content class="px-3 pb-3">
		<div class="rounded-md bg-muted/50">
			<CodeBlock code={JSON.stringify(schema, null, 2)} language="json" />
		</div>
		{@render children?.()}
	</Accordion.Content>
</Accordion.Item>
