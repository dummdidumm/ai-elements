import { mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const pkgRoot = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const remoteDir = path.join(pkgRoot, 'artifacts', 'screenshots', 'remote');
const localDir = path.join(pkgRoot, 'artifacts', 'screenshots', 'local');
const outDir = path.join(pkgRoot, 'artifacts', 'screenshots');
const outPath = path.join(outDir, 'comparison.md');

await mkdir(outDir, { recursive: true });

const remoteFiles = (await readdir(remoteDir)).filter((name) => name.endsWith('.png')).sort();

const lines = [
	'# Components visual comparison',
	'',
	'Remote: https://elements.ai-sdk.dev/components/<slug>',
	'',
	'Local: http://127.0.0.1:4173/components/<slug>',
	''
];

for (const file of remoteFiles) {
	const slug = file.replace(/\.png$/, '');
	lines.push(`## ${slug}`);
	lines.push('');
	lines.push(
		`<table><tr><td><strong>Remote</strong></td><td><strong>Local</strong></td></tr><tr><td><img src="./remote/${file}" alt="remote ${slug}" width="700" /></td><td><img src="./local/${file}" alt="local ${slug}" width="700" /></td></tr></table>`
	);
	lines.push('');
}

await writeFile(outPath, `${lines.join('\n')}\n`, 'utf8');
console.log(`Wrote ${outPath}`);
