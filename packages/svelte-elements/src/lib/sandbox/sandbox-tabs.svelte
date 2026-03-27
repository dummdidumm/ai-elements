<script lang="ts">
	import { Tabs } from 'bits-ui';
	import type { SandboxTabsProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: SandboxTabsProps = $props();
</script>

<Tabs.Root class={cn('w-full gap-0', className)} data-slot="sandbox-tabs" {...rest}>
	{@render children?.()}
</Tabs.Root>
