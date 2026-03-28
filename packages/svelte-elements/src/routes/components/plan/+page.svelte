<script lang="ts">
	import {
		Plan,
		PlanAction,
		PlanContent,
		PlanDescription,
		PlanFooter,
		PlanHeader,
		PlanTitle,
		PlanTrigger
	} from '$lib/index.js';
	import {
		DocsPage,
		DocsSection,
		InstallerTabs,
		PreviewCodeTabs,
		PropsTable
	} from '$lib/docs/index.js';

	const previewCode = `<script lang="ts">
	import {
		Plan,
		PlanAction,
		PlanContent,
		PlanDescription,
		PlanFooter,
		PlanHeader,
		PlanTitle,
		PlanTrigger
	} from '$lib/index.js';
<\/script>

<Plan open>
	<PlanHeader>
		<div>
			<PlanTitle>Release plan</PlanTitle>
			<PlanDescription>Ship docs pages and verify checks.</PlanDescription>
		</div>
		<PlanAction>
			<PlanTrigger />
		</PlanAction>
	</PlanHeader>
	<PlanContent>
		<ul class="list-disc pl-5 text-sm">
			<li>Create concrete component routes</li>
			<li>Run npm run check</li>
			<li>Run npm run lint</li>
		</ul>
	</PlanContent>
	<PlanFooter class="text-xs text-muted-foreground">Status: Ready</PlanFooter>
</Plan>`;

	const usageCode = `<script lang="ts">
	import {
		Plan,
		PlanAction,
		PlanContent,
		PlanDescription,
		PlanHeader,
		PlanTitle,
		PlanTrigger
	} from '$lib/index.js';

	const steps = ['Gather API details', 'Write docs pages', 'Validate and publish'];
<\/script>

<Plan open={true} isStreaming={false}>
	<PlanHeader>
		<div>
			<PlanTitle>Implementation plan</PlanTitle>
			<PlanDescription>Track progress with collapsible details.</PlanDescription>
		</div>
		<PlanAction><PlanTrigger /></PlanAction>
	</PlanHeader>
	<PlanContent>
		<ul class="list-disc pl-5 text-sm">
			{#each steps as step (step)}
				<li>{step}</li>
			{/each}
		</ul>
	</PlanContent>
</Plan>`;

	const propsRows = [
		{
			name: 'isStreaming',
			type: 'boolean',
			description: 'Enables shimmer treatment for title/description states.',
			defaultValue: 'false'
		},
		{ name: 'class', type: 'string', description: 'Classes applied to the internal card wrapper.' },
		{
			name: 'children',
			type: 'Snippet',
			description: 'Plan header, trigger, content, and footer composition.'
		},
		{
			name: '...rest',
			type: 'CollapsibleProps',
			description: 'Open state props forwarded to Collapsible.Root.'
		}
	];
</script>

<DocsPage
	title="Plan"
	description="A collapsible planning surface for multi-step execution, streaming states, and progress communication."
>
	<DocsSection
		title="Overview"
		description="Use Plan when an assistant needs to show structured next steps."
	>
		<p class="text-sm text-muted-foreground">
			Plan combines a summary header with expandable details, making it ideal for long-running tasks
			and implementation roadmaps.
		</p>
	</DocsSection>

	<DocsSection title="Preview" description="A complete plan card with trigger and checklist.">
		<PreviewCodeTabs code={previewCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Plan open>
					<PlanHeader>
						<div>
							<PlanTitle>Release plan</PlanTitle>
							<PlanDescription>Ship docs pages and verify checks.</PlanDescription>
						</div>
						<PlanAction>
							<PlanTrigger />
						</PlanAction>
					</PlanHeader>
					<PlanContent>
						<ul class="list-disc pl-5 text-sm">
							<li>Create concrete component routes</li>
							<li>Run npm run check</li>
							<li>Run npm run lint</li>
						</ul>
					</PlanContent>
					<PlanFooter class="text-xs text-muted-foreground">Status: Ready</PlanFooter>
				</Plan>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Installation" description="Install the plan primitives.">
		<InstallerTabs slug="plan" />
	</DocsSection>

	<DocsSection title="Features" description="Why this pattern works for AI planning UIs.">
		<ul class="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
			<li>Collapsible details keep interfaces concise by default.</li>
			<li>Composable subcomponents support custom headers and actions.</li>
			<li>Streaming mode helps communicate in-progress generation.</li>
			<li>Great fit for TODOs, migration steps, and deployment sequences.</li>
		</ul>
	</DocsSection>

	<DocsSection
		title="Usage"
		description="Generate a checklist from state and render it in PlanContent."
	>
		<PreviewCodeTabs code={usageCode} language="svelte" previewClass="items-start">
			{#snippet preview()}
				<Plan open={true} isStreaming={false}>
					<PlanHeader>
						<div>
							<PlanTitle>Implementation plan</PlanTitle>
							<PlanDescription>Track progress with collapsible details.</PlanDescription>
						</div>
						<PlanAction><PlanTrigger /></PlanAction>
					</PlanHeader>
					<PlanContent>
						<ul class="list-disc pl-5 text-sm">
							<li>Gather API details</li>
							<li>Write docs pages</li>
							<li>Validate and publish</li>
						</ul>
					</PlanContent>
				</Plan>
			{/snippet}
		</PreviewCodeTabs>
	</DocsSection>

	<DocsSection title="Props" description="Primary props for the Plan root component.">
		<PropsTable rows={propsRows} />
	</DocsSection>
</DocsPage>
