<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import type { ToolProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: ToolProps = $props();
</script>

<Collapsible.Root
	class={cn('group not-prose mb-4 w-full rounded-md border', className)}
	data-slot="tool"
	{...rest}
>
	{@render children?.()}
</Collapsible.Root>
