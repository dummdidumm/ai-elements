<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import type { SandboxContentProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: SandboxContentProps = $props();
</script>

<Collapsible.Content
	class={cn(
		'outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:slide-in-from-top-2',
		className
	)}
	data-slot="sandbox-content"
	{...rest}
>
	{@render children?.()}
</Collapsible.Content>
