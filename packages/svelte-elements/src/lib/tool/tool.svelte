<script lang="ts">
	import * as Collapsible from '../components/ui/collapsible/index.js';
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
