<script lang="ts">
	import { Tabs } from 'bits-ui';
	import type { SandboxTabsTriggerProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: SandboxTabsTriggerProps = $props();
</script>

<Tabs.Trigger
	class={cn(
		'rounded-none border-0 border-transparent border-b-2 px-4 py-2 font-medium text-muted-foreground text-sm transition-colors data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none',
		className
	)}
	data-slot="sandbox-tabs-trigger"
	{...rest}
>
	{@render children?.()}
</Tabs.Trigger>
