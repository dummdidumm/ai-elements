<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import type { ToolContentProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: ToolContentProps = $props();
</script>

<Collapsible.Content
	class={cn(
		'text-popover-foreground data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:slide-in-from-top-2 space-y-4 p-4 outline-none',
		className
	)}
	data-slot="tool-content"
	{...rest}
>
	{@render children?.()}
</Collapsible.Content>
