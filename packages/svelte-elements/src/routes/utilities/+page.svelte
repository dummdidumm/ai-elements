<script lang="ts">
	import { Image, OpenInChat } from '$lib';

	const demoSvgBase64 =
		'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMjAiIGhlaWdodD0iMTYwIiB2aWV3Qm94PSIwIDAgMzIwIDE2MCI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxNjAiIGZpbGw9IiNlZmY2ZmYiLz48dGV4dCB4PSIxNjAiIHk9Ijg0IiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMTExODI3Ij5VdGlsaXR5IEltYWdlPC90ZXh0Pjwvc3ZnPg==';
</script>

<div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-6 md:p-10">
	<header class="space-y-2">
		<h1 class="text-3xl font-semibold tracking-tight">Utilities components showcase</h1>
		<p class="text-muted-foreground text-sm">
			Minimal usage notes and live examples for utility components from <code>$lib</code>.
		</p>
	</header>

	<section class="rounded-xl border p-4">
		<h2 class="text-lg font-medium">Image</h2>
		<p class="text-muted-foreground mt-1 text-sm">
			How to use: Pass a base64 payload and media type to <code>&lt;Image /&gt;</code>.
		</p>
		<div class="mt-4 rounded-lg border p-3">
			<Image alt="Utility component preview" base64={demoSvgBase64} mediaType="image/svg+xml" />
		</div>
	</section>

	<section class="rounded-xl border p-4">
		<h2 class="text-lg font-medium">OpenInChat</h2>
		<p class="text-muted-foreground mt-1 text-sm">
			How to use: Wrap a concise call to action in <code>&lt;OpenInChat&gt;</code>.
		</p>
		<div class="mt-4 rounded-lg border p-3">
			<OpenInChat>
				<span aria-hidden="true">💬</span>
				<span>Open this result in chat</span>
			</OpenInChat>
		</div>
	</section>
</div>
