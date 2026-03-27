<script lang="ts">
	import { Tabs } from 'bits-ui';
	import type { SandboxTabsTriggerProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: SandboxTabsTriggerProps = $props();
</script>

<Tabs.Trigger
	class={cn(
		'text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground rounded-none border-0 border-b-2 border-transparent px-4 py-2 text-sm font-medium transition-colors data-[state=active]:bg-transparent data-[state=active]:shadow-none',
		className
	)}
	data-slot="sandbox-tabs-trigger"
	{...rest}
>
	{@render children?.()}
</Tabs.Trigger>
