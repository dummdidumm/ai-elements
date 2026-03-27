<script lang="ts">
	import { cn } from '$lib/utils.js';

	interface PropsTableRow {
		name: string;
		type: string;
		description: string;
		required?: boolean;
		defaultValue?: string;
	}

	let {
		rows,
		class: className
	}: {
		rows: PropsTableRow[];
		class?: string;
	} = $props();
</script>

<div class={cn('overflow-x-auto rounded-xl border', className)}>
	<table class="w-full min-w-[720px] border-collapse text-left text-sm">
		<thead class="bg-muted/40">
			<tr class="border-b">
				<th class="px-4 py-2 font-medium">Prop</th>
				<th class="px-4 py-2 font-medium">Type</th>
				<th class="px-4 py-2 font-medium">Required</th>
				<th class="px-4 py-2 font-medium">Default</th>
				<th class="px-4 py-2 font-medium">Description</th>
			</tr>
		</thead>
		<tbody>
			{#each rows as row (row.name)}
				<tr class="border-b last:border-b-0">
					<td class="px-4 py-3 font-mono text-xs">{row.name}</td>
					<td class="px-4 py-3 font-mono text-xs text-muted-foreground">{row.type}</td>
					<td class="px-4 py-3">{row.required ? 'Yes' : 'No'}</td>
					<td class="px-4 py-3 font-mono text-xs text-muted-foreground"
						>{row.defaultValue ?? '—'}</td
					>
					<td class="px-4 py-3">{row.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
