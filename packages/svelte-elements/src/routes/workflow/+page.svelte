<script lang="ts">
	import { Canvas, Connection, Controls, Edge, Node, Panel, Toolbar } from '../../lib/index.js';
</script>

<div class="mx-auto flex w-full max-w-6xl flex-col gap-8 p-6 md:p-10">
	<header class="space-y-3">
		<h1 class="text-3xl font-semibold tracking-tight">Workflow components showcase</h1>
		<p class="text-muted-foreground max-w-3xl text-sm">
			These workflow primitives are baseline wrappers with consistent styling. Compose them to build
			your own diagram and editor UI.
		</p>
	</header>

	<div class="grid gap-6 md:grid-cols-2">
		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Canvas</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Wrap your workflow surface in <code>&lt;Canvas&gt;</code>, then place composed
				content such as nodes, overlays, and helpers inside.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Canvas class="bg-muted/20 flex min-h-40 items-center justify-center">
					<span class="text-muted-foreground text-sm">Canvas area for custom workflow content</span>
				</Canvas>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Node</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Node&gt;</code> as a styled container and render any node body inside.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Node class="mx-auto max-w-64 space-y-2">
					<p class="text-sm font-medium">Transform data</p>
					<p class="text-muted-foreground text-xs">Input: events.json</p>
					<p class="text-muted-foreground text-xs">Output: clean-events.json</p>
				</Node>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Edge</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Render <code>&lt;Edge&gt;</code> where you want a simple visual edge primitive between
				workflow elements.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Edge />
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Connection</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Connection&gt;</code> for connection-line previews or lightweight link
				indicators in your canvas.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Connection />
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Controls</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Compose zoom/pan/reset or view actions inside <code>&lt;Controls&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Controls>
					<button class="hover:bg-muted rounded-sm border px-2 py-1 text-xs" type="button"
						>Zoom in</button
					>
					<button class="hover:bg-muted rounded-sm border px-2 py-1 text-xs" type="button">
						Zoom out
					</button>
					<button class="hover:bg-muted rounded-sm border px-2 py-1 text-xs" type="button">
						Fit view
					</button>
				</Controls>
			</div>
		</section>

		<section class="rounded-xl border p-4">
			<h2 class="text-lg font-medium">Toolbar</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Place node-level or global editing actions inside <code>&lt;Toolbar&gt;</code>.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Toolbar>
					<button class="hover:bg-muted rounded-sm border px-2 py-1 text-xs" type="button"
						>Edit</button
					>
					<button class="hover:bg-muted rounded-sm border px-2 py-1 text-xs" type="button"
						>Duplicate</button
					>
					<button class="hover:bg-muted rounded-sm border px-2 py-1 text-xs" type="button"
						>Delete</button
					>
				</Toolbar>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">Panel</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Use <code>&lt;Panel&gt;</code> for inspector or status blocks alongside your workflow
				canvas.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Panel class="max-w-lg space-y-2 p-3">
					<div class="flex items-center justify-between">
						<p class="text-sm font-medium">Workflow inspector</p>
						<span class="text-muted-foreground text-xs">3 nodes selected</span>
					</div>
					<div class="text-muted-foreground text-xs">
						This panel demonstrates simple composition with custom inspector content.
					</div>
				</Panel>
			</div>
		</section>

		<section class="rounded-xl border p-4 md:col-span-2">
			<h2 class="text-lg font-medium">Composed workflow example</h2>
			<p class="text-muted-foreground mt-1 text-sm">
				How to use: Combine these wrappers together in one view. Keep behavior in your own state and
				use these components as presentational building blocks.
			</p>
			<div class="mt-4 rounded-lg border p-3">
				<Canvas class="bg-muted/20 min-h-80 p-4">
					<div class="grid gap-4 md:grid-cols-[1fr_auto]">
						<div class="space-y-4">
							<Panel class="space-y-3 p-3">
								<div class="flex items-center justify-between">
									<p class="text-sm font-medium">Pipeline overview</p>
									<Controls>
										<button
											class="hover:bg-muted rounded-sm border px-2 py-1 text-xs"
											type="button"
										>
											+
										</button>
										<button
											class="hover:bg-muted rounded-sm border px-2 py-1 text-xs"
											type="button"
										>
											-
										</button>
										<button
											class="hover:bg-muted rounded-sm border px-2 py-1 text-xs"
											type="button"
										>
											Reset
										</button>
									</Controls>
								</div>

								<div class="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
									<Node>
										<p class="text-sm font-medium">Ingest</p>
										<p class="text-muted-foreground text-xs">Read source data</p>
									</Node>
									<Edge class="hidden md:block" />
									<Node>
										<p class="text-sm font-medium">Validate</p>
										<p class="text-muted-foreground text-xs">Schema + quality checks</p>
									</Node>
								</div>

								<Connection />
							</Panel>
						</div>

						<div class="md:self-start">
							<Toolbar>
								<button class="hover:bg-muted rounded-sm border px-2 py-1 text-xs" type="button">
									Add node
								</button>
								<button class="hover:bg-muted rounded-sm border px-2 py-1 text-xs" type="button">
									Add edge
								</button>
							</Toolbar>
						</div>
					</div>
				</Canvas>
			</div>
		</section>
	</div>
</div>
