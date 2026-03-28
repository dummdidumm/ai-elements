<script lang="ts">
	import {
		Attachments,
		ChainOfThought,
		Checkpoint,
		Confirmation,
		Context,
		Conversation,
		InlineCitation,
		Message,
		ModelSelector,
		Plan,
		PlanAction,
		PlanContent,
		PlanDescription,
		PlanFooter,
		PlanHeader,
		PlanTitle,
		PlanTrigger,
		PromptInput,
		Queue,
		Reasoning,
		ReasoningContent,
		ReasoningTrigger,
		Sandbox,
		SandboxContent,
		SandboxHeader,
		SandboxTabContent,
		SandboxTabs,
		SandboxTabsBar,
		SandboxTabsList,
		SandboxTabsTrigger,
		Sources,
		Suggestion,
		Task,
		Tool,
		ToolContent,
		ToolHeader,
		ToolInput,
		ToolOutput
	} from '../../lib/index.js';
</script>

<div class="mx-auto flex w-full max-w-6xl flex-col gap-8 p-6 md:p-10">
	<header class="space-y-3">
		<h1 class="text-3xl font-semibold tracking-tight">Chatbot components showcase</h1>
		<p class="text-muted-foreground max-w-3xl text-sm">
			This page demonstrates how each chatbot-focused component can be used in a simple Svelte view.
			Each section includes a short usage note and a live visual example.
		</p>
	</header>

	<div class="grid gap-6 md:grid-cols-2">
		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Conversation</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Wrap your chat timeline in <code>&lt;Conversation&gt;</code> and place
				<code>&lt;Message&gt;</code> items inside it.
			</p>
			<div class="bg-muted/30 mt-4 rounded-lg border p-3">
				<Conversation class="space-y-3">
					<Message class="bg-primary/10 rounded-lg border p-3">
						<p class="text-sm">User: Summarize today&apos;s release notes.</p>
					</Message>
					<Message class="bg-background rounded-lg border p-3">
						<p class="text-sm">Assistant: The release adds typed chatbot UI building blocks.</p>
					</Message>
				</Conversation>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Context</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Context&gt;</code> to show lightweight metadata about the current conversation
				or task.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Context class="bg-muted/40 rounded-full border px-3 py-1.5">
					<span>Project: Svelte elements</span>
					<span class="text-muted-foreground">•</span>
					<span>Environment: staging</span>
				</Context>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">PromptInput</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Wrap your input controls in <code>&lt;PromptInput&gt;</code> to structure prompt submission
				UIs.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<PromptInput class="space-y-2" onsubmit={(event: SubmitEvent) => event.preventDefault()}>
					<label class="text-sm font-medium" for="prompt-demo">Prompt</label>
					<textarea
						id="prompt-demo"
						class="bg-background min-h-20 w-full rounded-md border p-2 text-sm"
						placeholder="Ask the assistant something..."
					></textarea>
					<button
						class="bg-primary text-primary-foreground rounded-md px-3 py-1.5 text-sm"
						type="submit"
					>
						Send
					</button>
				</PromptInput>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Suggestion</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Render <code>&lt;Suggestion&gt;</code> buttons for one-click prompt starters.
			</p>
			<div class="mt-4 flex flex-wrap gap-2 rounded-lg border p-3">
				<Suggestion>Explain this stack trace</Suggestion>
				<Suggestion>Generate release summary</Suggestion>
				<Suggestion>Create test checklist</Suggestion>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Attachments</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Place file chips or previews in <code>&lt;Attachments&gt;</code> near a prompt or
				message.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Attachments>
					<span class="bg-muted rounded-full border px-3 py-1 text-xs">spec.md</span>
					<span class="bg-muted rounded-full border px-3 py-1 text-xs">changelog.txt</span>
					<span class="bg-muted rounded-full border px-3 py-1 text-xs">screenshot.png</span>
				</Attachments>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">ModelSelector</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Wrap your model picker controls in <code>&lt;ModelSelector&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<ModelSelector class="p-2">
					<label class="sr-only" for="model-demo">Select model</label>
					<select id="model-demo" class="bg-background w-full rounded-md border p-2 text-sm">
						<option>gpt-5.3-mini</option>
						<option>gpt-5.3</option>
						<option>gpt-4.1-mini</option>
					</select>
				</ModelSelector>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">Sources + InlineCitation</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Sources&gt;</code> for source listings and insert
				<code>&lt;InlineCitation&gt;</code> inside response text.
			</p>
			<div class="mt-4 space-y-3 rounded-lg border p-3">
				<p class="text-sm">
					The deployment process is now documented
					<InlineCitation class="text-primary ml-1">[1]</InlineCitation>
					and includes rollback guidance
					<InlineCitation class="text-primary ml-1">[2]</InlineCitation>.
				</p>
				<Sources class="space-y-1">
					<div class="bg-muted/40 rounded-md border px-2 py-1 text-xs">[1] docs/deploy.md</div>
					<div class="bg-muted/40 rounded-md border px-2 py-1 text-xs">
						[2] docs/runbooks/rollback.md
					</div>
				</Sources>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Queue</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Display pending operations in <code>&lt;Queue&gt;</code> to communicate execution
				order.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Queue>
					<div class="text-sm">1. Gather requirements</div>
					<div class="text-sm">2. Apply patch</div>
					<div class="text-sm">3. Run checks</div>
				</Queue>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Task + Checkpoint</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Task&gt;</code> for grouped work and
				<code>&lt;Checkpoint&gt;</code> for status milestones.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Task>
					<div class="text-sm font-medium">Create chatbot showcase route</div>
					<Checkpoint class="text-xs">Checkpoint: examples render correctly</Checkpoint>
				</Task>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Confirmation</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Show explicit approve/deny messaging in <code>&lt;Confirmation&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Confirmation class="bg-muted/20">
					<p class="text-sm">Confirm publishing this component package to npm?</p>
				</Confirmation>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">ChainOfThought</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;ChainOfThought&gt;</code> for high-level reasoning summaries, not raw
				internal thoughts.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<ChainOfThought>
					<div class="bg-muted/30 rounded-md border p-2">Step 1: Identify required components.</div>
					<div class="bg-muted/30 rounded-md border p-2">
						Step 2: Build a simple section per component.
					</div>
					<div class="bg-muted/30 rounded-md border p-2">Step 3: Validate with check and lint.</div>
				</ChainOfThought>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">Tool</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Compose <code>&lt;Tool&gt;</code> with <code>&lt;ToolHeader&gt;</code> and
				<code>&lt;ToolContent&gt;</code> to show tool invocation details.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Tool open={true}>
					<ToolHeader state="output-available" type="dynamic-tool" toolName="fetchDocs" />
					<ToolContent>
						<ToolInput input={{ query: 'Svelte chatbot components' }} />
						<ToolOutput
							errorText={undefined}
							output={{ status: 'ok', resultCount: 3, note: 'Fetched matching documentation.' }}
						/>
					</ToolContent>
				</Tool>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">Plan</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Build expandable plans with <code>&lt;Plan&gt;</code> and its header/content parts.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Plan open={true}>
					<PlanHeader>
						<div>
							<PlanTitle>Implementation plan</PlanTitle>
							<PlanDescription>Show each chatbot component with usage and preview.</PlanDescription>
						</div>
						<PlanAction>
							<PlanTrigger />
						</PlanAction>
					</PlanHeader>
					<PlanContent>
						<ul class="list-disc space-y-1 pl-5 text-sm">
							<li>Import components from <code>$lib</code>.</li>
							<li>Create grouped showcase sections.</li>
							<li>Run project checks and linting.</li>
						</ul>
					</PlanContent>
					<PlanFooter class="text-muted-foreground text-xs">Status: Ready to execute</PlanFooter>
				</Plan>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">Reasoning</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Reasoning&gt;</code> with trigger/content for collapsible reasoning
				summaries.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Reasoning defaultOpen={true} isStreaming={false}>
					<ReasoningTrigger />
					<ReasoningContent
						content={'- Reviewed component APIs\n- Built simple examples\n- Kept behavior static and predictable'}
					/>
				</Reasoning>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">Sandbox</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Compose <code>&lt;Sandbox&gt;</code> with tabs to show preview/code-like content in
				a single panel.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Sandbox open={true}>
					<SandboxHeader state="output-available" title="Chatbot UI preview" />
					<SandboxContent>
						<SandboxTabs value="preview">
							<SandboxTabsBar>
								<SandboxTabsList>
									<SandboxTabsTrigger value="preview">Preview</SandboxTabsTrigger>
									<SandboxTabsTrigger value="notes">Notes</SandboxTabsTrigger>
								</SandboxTabsList>
							</SandboxTabsBar>
							<SandboxTabContent class="p-3" value="preview">
								<div class="bg-muted/20 rounded-md border p-3 text-sm">
									Rendered chatbot widgets appear here.
								</div>
							</SandboxTabContent>
							<SandboxTabContent class="p-3" value="notes">
								<div class="text-sm">
									Use this tab to present implementation notes or test output.
								</div>
							</SandboxTabContent>
						</SandboxTabs>
					</SandboxContent>
				</Sandbox>
			</div>
		</section>
	</div>
</div>
