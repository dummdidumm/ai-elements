<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import type { ToolContentProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: ToolContentProps = $props();
</script>

<Collapsible.Content
	class={cn(
		'space-y-4 p-4 text-popover-foreground outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:slide-in-from-top-2',
		className
	)}
	data-slot="tool-content"
	{...rest}
>
	{@render children?.()}
</Collapsible.Content>
