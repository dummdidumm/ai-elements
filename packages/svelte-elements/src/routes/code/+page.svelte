<script lang="ts">
	import {
		Agent,
		Artifact,
		CodeBlock,
		Commit,
		EnvironmentVariables,
		FileTree,
		JSXPreview,
		PackageInfo,
		SchemaDisplay,
		Snippet,
		StackTrace,
		Terminal,
		TestResults,
		WebPreview
	} from '$lib';
</script>

<div class="mx-auto flex w-full max-w-6xl flex-col gap-8 p-6 md:p-10">
	<header class="space-y-3">
		<h1 class="text-3xl font-semibold tracking-tight">Code components showcase</h1>
		<p class="text-muted-foreground max-w-3xl text-sm">
			Readable examples for code-focused UI primitives. Each section includes a short “How to use”
			note and a live example with minimal interactivity.
		</p>
	</header>

	<div class="grid gap-6 md:grid-cols-2">
		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">CodeBlock + Snippet + JSXPreview</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Render full source in <code>&lt;CodeBlock&gt;</code>, inline commands in
				<code>&lt;Snippet&gt;</code>, and visual JSX-like output in <code>&lt;JSXPreview&gt;</code>.
			</p>
			<div class="mt-4 grid gap-4 lg:grid-cols-3">
				<div class="space-y-2 lg:col-span-2">
					<CodeBlock
						code={`export function formatBytes(bytes: number): string {\n\tif (bytes < 1024) return \`\${bytes} B\`;\n\tconst kb = bytes / 1024;\n\treturn \`\${kb.toFixed(1)} KB\`;\n}`}
						language="ts"
						showLineNumbers={true}
					/>
				</div>
				<div class="space-y-3">
					<Snippet class="px-3 py-2 text-xs">
						<span class="text-muted-foreground mr-2">$</span>
						<span>npm run check</span>
					</Snippet>
					<JSXPreview class="space-y-2">
						<p class="text-xs font-medium">Preview</p>
						<div class="bg-muted/30 rounded-md border p-2 text-sm">
							<button class="rounded border px-2 py-1 text-xs" type="button">Deploy</button>
						</div>
					</JSXPreview>
				</div>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Agent</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Wrap assistant planning or execution text in <code>&lt;Agent&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Agent class="space-y-2 p-3">
					<p class="text-sm font-medium">Release assistant</p>
					<p class="text-muted-foreground text-sm">
						Analyzing changed files and preparing a safe migration summary.
					</p>
				</Agent>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Artifact</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Artifact&gt;</code> as a container for generated output or reports.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Artifact>
					<div class="border-b p-3 text-sm font-medium">release-notes.md</div>
					<div class="text-muted-foreground p-3 text-sm">
						- Added code component showcase route
						<br />
						- Included docs-style usage examples
					</div>
				</Artifact>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Commit</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Render commit metadata and change summaries in <code>&lt;Commit&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Commit class="space-y-2 p-3">
					<div class="flex items-center justify-between text-sm">
						<span class="font-mono">9f7c3ae</span>
						<span class="text-muted-foreground">feat(svelte-elements)</span>
					</div>
					<p class="text-sm">Add docs-style route for code components showcase.</p>
				</Commit>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">EnvironmentVariables</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Display key-value runtime configuration with
				<code>&lt;EnvironmentVariables&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<EnvironmentVariables class="divide-y text-sm">
					<div class="flex justify-between px-3 py-2">
						<span class="font-mono">NODE_ENV</span>
						<span class="text-muted-foreground">production</span>
					</div>
					<div class="flex justify-between px-3 py-2">
						<span class="font-mono">PUBLIC_API_BASE</span>
						<span class="text-muted-foreground">https://api.example.dev</span>
					</div>
				</EnvironmentVariables>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">FileTree</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Present repository structure snapshots inside <code>&lt;FileTree&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<FileTree class="space-y-1 p-3 text-xs">
					<div>packages/</div>
					<div class="pl-3">svelte-elements/</div>
					<div class="pl-6">src/routes/code/+page.svelte</div>
					<div class="pl-6">src/lib/code-block/</div>
				</FileTree>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">PackageInfo</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;PackageInfo&gt;</code> for package metadata summaries.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<PackageInfo class="space-y-2">
					<p class="text-sm font-medium">@repo/svelte-elements</p>
					<p class="text-muted-foreground text-sm">Version 0.9.0</p>
					<p class="text-muted-foreground text-xs">Includes chatbot, code, and graph UI primitives.</p>
				</PackageInfo>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">SchemaDisplay</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Wrap structured schema details in <code>&lt;SchemaDisplay&gt;</code> for API or
				payload documentation.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<SchemaDisplay class="divide-y text-sm">
					<div class="grid grid-cols-12 gap-2 px-3 py-2">
						<span class="col-span-3 font-mono">id</span>
						<span class="col-span-2 text-muted-foreground">string</span>
						<span class="col-span-7">Unique release identifier</span>
					</div>
					<div class="grid grid-cols-12 gap-2 px-3 py-2">
						<span class="col-span-3 font-mono">status</span>
						<span class="col-span-2 text-muted-foreground">enum</span>
						<span class="col-span-7">draft | approved | deployed</span>
					</div>
				</SchemaDisplay>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">StackTrace</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Show formatted runtime errors inside <code>&lt;StackTrace&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<StackTrace class="space-y-1 p-3 text-xs">
					<div>Error: Cannot read properties of undefined (reading &apos;status&apos;)</div>
					<div class="text-muted-foreground">at parseResult (src/lib/parser.ts:42:17)</div>
					<div class="text-muted-foreground">at runChecks (src/routes/code/+page.svelte:12:5)</div>
				</StackTrace>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Terminal</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Render command sessions and output in <code>&lt;Terminal&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Terminal class="text-xs">
					<div class="border-b border-zinc-800 px-3 py-2 font-mono">$ npm run lint</div>
					<div class="space-y-1 px-3 py-2 font-mono text-zinc-300">
						<p>&gt; svelte-elements@0.0.0 lint</p>
						<p>&gt; eslint .</p>
						<p class="text-emerald-300">✔ 0 problems found</p>
					</div>
				</Terminal>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">TestResults</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Present passing/failing checks in <code>&lt;TestResults&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<TestResults class="divide-y text-sm">
					<div class="flex items-center justify-between px-3 py-2">
						<span>unit: code-block utils</span>
						<span class="text-emerald-600">PASS</span>
					</div>
					<div class="flex items-center justify-between px-3 py-2">
						<span>integration: showcase routes</span>
						<span class="text-emerald-600">PASS</span>
					</div>
				</TestResults>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">WebPreview</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Wrap rendered website snapshots or lightweight preview content in
				<code>&lt;WebPreview&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<WebPreview class="min-h-36 overflow-hidden">
					<div class="bg-muted/30 border-b px-3 py-2 text-xs">https://preview.example.dev/release</div>
					<div class="p-3 text-sm">
						<p class="font-medium">Release dashboard</p>
						<p class="text-muted-foreground mt-1 text-xs">
							All checks green. Ready for production rollout.
						</p>
					</div>
				</WebPreview>
			</div>
		</section>
	</div>
</div>
