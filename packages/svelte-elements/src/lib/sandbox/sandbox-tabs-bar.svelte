<script lang="ts">
	import type { SandboxTabsBarProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, children, ...rest }: SandboxTabsBarProps = $props();
</script>

<div
	class={cn('border-border flex w-full items-center border-t border-b', className)}
	data-slot="sandbox-tabs-bar"
	{...rest}
>
	{@render children?.()}
</div>
