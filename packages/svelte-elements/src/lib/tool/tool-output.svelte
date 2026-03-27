<script lang="ts">
	import { CodeBlock } from '../code-block/index.js';
	import type { ToolOutputProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, output, errorText, ...rest }: ToolOutputProps = $props();

	const useJsonBlock = $derived(typeof output === 'object' && output !== null);
</script>

{#if output || errorText}
	<div class={cn('space-y-2', className)} data-slot="tool-output" {...rest}>
		<h4 class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
			{errorText ? 'Error' : 'Result'}
		</h4>
		<div
			class={cn(
				'overflow-x-auto rounded-md text-xs [&_table]:w-full',
				errorText ? 'bg-destructive/10 text-destructive' : 'bg-muted/50 text-foreground'
			)}
		>
			{#if errorText}
				<div>{errorText}</div>
			{/if}
			{#if typeof output === 'string'}
				<CodeBlock code={output} language="json" />
			{:else if useJsonBlock}
				<CodeBlock code={JSON.stringify(output, null, 2)} language="json" />
			{:else if output != null}
				<div>{String(output)}</div>
			{/if}
		</div>
	</div>
{/if}
