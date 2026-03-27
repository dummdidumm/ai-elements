<script lang="ts">
	import * as Collapsible from '../components/ui/collapsible/index.js';
	import type { SandboxProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, open = $bindable(true), ...rest }: SandboxProps = $props();
</script>

<Collapsible.Root
	class={cn('not-prose group mb-4 w-full overflow-hidden rounded-md border', className)}
	data-slot="sandbox"
	bind:open
	{...rest}
>
	{@render children?.()}
</Collapsible.Root>
