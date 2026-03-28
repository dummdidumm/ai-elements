<script lang="ts">
	import * as Tabs from '../components/ui/tabs/index.js';
	import type { SandboxTabContentProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: SandboxTabContentProps = $props();
</script>

<Tabs.Content class={cn('mt-0 text-sm', className)} data-slot="sandbox-tab-content" {...rest}>
	{@render children?.()}
</Tabs.Content>
