<script lang="ts">
	import { Tabs } from 'bits-ui';
	import type { SandboxTabsListProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: SandboxTabsListProps = $props();
</script>

<Tabs.List
	class={cn('h-auto rounded-none border-0 bg-transparent p-0', className)}
	data-slot="sandbox-tabs-list"
	{...rest}
>
	{@render children?.()}
</Tabs.List>
