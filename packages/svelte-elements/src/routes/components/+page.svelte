<script lang="ts">
	import {
		COMPONENT_DOC_COUNT,
		COMPONENT_DOC_SECTIONS,
		DocsPage,
		DocsSection
	} from '$lib/docs/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
</script>

<DocsPage
	title="Svelte components docs"
	description={`Browse all ${COMPONENT_DOC_COUNT} AI Elements component docs grouped by category.`}
>
	<DocsSection
		title="All components"
		description="This route scaffold mirrors the docs experience and provides shared building blocks for individual component pages."
	>
		<div class="grid gap-4 md:grid-cols-2">
			{#each COMPONENT_DOC_SECTIONS as section (section.id)}
				<Card.Root>
					<Card.Header class="space-y-1 border-b">
						<Card.Title>{section.title}</Card.Title>
						<Card.Description>{section.description}</Card.Description>
					</Card.Header>
					<Card.Content class="pt-4">
						<ul class="space-y-2">
							{#each section.items as item (item.slug)}
								<li>
									<a
										class="text-sm text-muted-foreground transition-colors hover:text-foreground"
										href={`/components/${item.slug}`}
									>
										{item.title}
									</a>
								</li>
							{/each}
						</ul>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</DocsSection>
</DocsPage>
