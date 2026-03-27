<script lang="ts">
	import * as Collapsible from '../components/ui/collapsible/index.js';
	import type { SandboxContentProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: SandboxContentProps = $props();
</script>

<Collapsible.Content
	class={cn(
		'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:slide-in-from-top-2 outline-none',
		className
	)}
	data-slot="sandbox-content"
	{...rest}
>
	{@render children?.()}
</Collapsible.Content>
