<script lang="ts">
	import { Collapsible } from 'bits-ui';
	import DOMPurify from 'isomorphic-dompurify';
	import { marked } from 'marked';
	import type { ReasoningContentProps } from './types.js';
	import { cn } from '../utils.js';

	let { class: className, content = '', ...rest }: ReasoningContentProps = $props();

	const html = $derived.by(() => DOMPurify.sanitize(marked.parse(content) as string));
</script>

<Collapsible.Content
	class={cn(
		'mt-4 text-sm',
		'text-muted-foreground outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:animate-in data-[state=open]:slide-in-from-top-2',
		className
	)}
	data-slot="reasoning-content"
	{...rest}
>
	<!-- eslint-disable svelte/no-at-html-tags -- sanitized with DOMPurify -->
	<div class="max-w-none [&_p]:mb-2 [&_p:last-child]:mb-0">{@html html}</div>
</Collapsible.Content>
