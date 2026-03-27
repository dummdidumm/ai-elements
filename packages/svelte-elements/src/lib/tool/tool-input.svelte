<script lang="ts">
	import { CodeBlock } from '../code-block/index.js';
	import type { ToolInputProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, input, ...rest }: ToolInputProps = $props();
</script>

<div class={cn('space-y-2 overflow-hidden', className)} data-slot="tool-input" {...rest}>
	<h4 class="font-medium text-muted-foreground text-xs uppercase tracking-wide">Parameters</h4>
	<div class="rounded-md bg-muted/50">
		<CodeBlock code={JSON.stringify(input, null, 2)} language="json" />
	</div>
</div>
