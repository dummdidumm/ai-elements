<script lang="ts">
	import { Accordion } from 'bits-ui';
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
	<Accordion.Header>
		<Accordion.Trigger
			class="flex flex-1 items-start justify-between gap-4 px-3 py-2 text-left text-sm font-medium transition-all outline-none hover:no-underline [&[data-state=open]>svg]:rotate-180"
		>
			{tool.description ?? 'No description'}
		</Accordion.Trigger>
	</Accordion.Header>
	<Accordion.Content class="px-3 pb-3">
		<div class="bg-muted/50 rounded-md">
			<CodeBlock code={JSON.stringify(schema, null, 2)} language="json" />
		</div>
		{@render children?.()}
	</Accordion.Content>
</Accordion.Item>
