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

<div class={cn('overflow-x-auto rounded-xl border bg-card', className)}>
	<table class="w-full min-w-[720px] border-collapse text-left text-sm">
		<thead class="bg-muted/35">
			<tr class="border-b">
				<th class="px-4 py-2.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
					>Prop</th
				>
				<th class="px-4 py-2.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
					>Type</th
				>
				<th class="px-4 py-2.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
					>Required</th
				>
				<th class="px-4 py-2.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
					>Default</th
				>
				<th class="px-4 py-2.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
					Description
				</th>
			</tr>
		</thead>
		<tbody>
			{#each rows as row (row.name)}
				<tr class="border-b align-top last:border-b-0">
					<td class="px-4 py-3.5 font-mono text-xs text-foreground">{row.name}</td>
					<td class="px-4 py-3.5 font-mono text-xs text-muted-foreground">{row.type}</td>
					<td class="px-4 py-3.5 text-sm">{row.required ? 'Yes' : 'No'}</td>
					<td class="px-4 py-3.5 font-mono text-xs text-muted-foreground"
						>{row.defaultValue ?? '—'}</td
					>
					<td class="px-4 py-3.5 text-sm leading-6">{row.description}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
