<script lang="ts">
	import type { AgentOutputProps } from './types.js';
	import { CodeBlock } from '../code-block/index.js';
	import { cn } from '../utils.js';

	let { class: className, schema, children, ...rest }: AgentOutputProps = $props();
</script>

<div class={cn('space-y-2', className)} data-slot="agent-output" {...rest}>
	<span class="font-medium text-muted-foreground text-sm">Output Schema</span>
	<div class="rounded-md bg-muted/50">
		<CodeBlock code={schema} language="typescript" />
	</div>
	{@render children?.()}
</div>
