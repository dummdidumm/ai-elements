<script lang="ts">
	import { page } from '$app/state';
	import { COMPONENT_DOC_SECTIONS } from '$lib/docs/components-manifest.js';

	const { children } = $props();

	const isActive = (href: string) => page.url.pathname === href;
</script>

<div class="mx-auto grid w-full max-w-7xl gap-6 p-4 md:grid-cols-[260px_1fr] md:p-6 lg:gap-10">
	<aside class="top-4 h-fit rounded-xl border bg-background/80 p-4 md:sticky">
		<nav aria-label="Components documentation" class="space-y-6">
			<div class="space-y-1">
				<p class="text-xs font-medium tracking-wide text-muted-foreground uppercase">Components</p>
				<a
					class="block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted/60"
					class:bg-muted={isActive('/components')}
					class:font-medium={isActive('/components')}
					href="/components"
				>
					Overview
				</a>
			</div>

			{#each COMPONENT_DOC_SECTIONS as section (section.id)}
				<div class="space-y-1">
					<p class="text-xs font-medium tracking-wide text-muted-foreground uppercase">
						{section.title}
					</p>
					<ul class="space-y-0.5">
						{#each section.items as item (item.slug)}
							<li>
								<a
									class="block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-muted/60"
									class:bg-muted={isActive(`/components/${item.slug}`)}
									class:font-medium={isActive(`/components/${item.slug}`)}
									href={`/components/${item.slug}`}
								>
									{item.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</nav>
	</aside>

	<main class="min-w-0">
		{@render children()}
	</main>
</div>
