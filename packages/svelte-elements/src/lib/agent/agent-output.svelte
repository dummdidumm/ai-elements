<script lang="ts">
	import type { AgentOutputProps } from './types.js';
	import { CodeBlock } from '../code-block/index.js';
	import { cn } from '../utils.js';

	let { class: className, schema, children, ...rest }: AgentOutputProps = $props();
</script>

<div class={cn('space-y-2', className)} data-slot="agent-output" {...rest}>
	<span class="text-muted-foreground text-sm font-medium">Output Schema</span>
	<div class="bg-muted/50 rounded-md">
		<CodeBlock code={schema} language="typescript" />
	</div>
	{@render children?.()}
</div>
