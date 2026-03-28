import { chromium } from 'playwright';
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const pkgRoot = path.resolve(scriptDir, '..');
const manifestPath = path.join(pkgRoot, 'src', 'lib', 'docs', 'components-manifest.ts');

const args = process.argv.slice(2);
const getArgValue = (flag) => {
	const idx = args.indexOf(flag);
	if (idx === -1) {
		return undefined;
	}
	return args.at(idx + 1);
};

const mode = getArgValue('--mode') ?? args[0] ?? 'remote';
const baseUrlArg = getArgValue('--baseUrl');
const localBase = getArgValue('--localBase');
const remoteBase = getArgValue('--remoteBase');

const urlByMode = {
	remote: 'https://elements.ai-sdk.dev/components',
	local: 'http://127.0.0.1:4173/components'
};

const resolveBaseUrl = (currentMode) => {
	if (currentMode === 'local') {
		return localBase ?? baseUrlArg ?? urlByMode.local;
	}
	if (currentMode === 'remote') {
		return remoteBase ?? baseUrlArg ?? urlByMode.remote;
	}
	return undefined;
};

const manifestSource = await readFile(manifestPath, 'utf8');
const slugMatches = [...manifestSource.matchAll(/slug:\s*'([^']+)'/g)];
const slugs = [...new Set(slugMatches.map((match) => match[1]))];

if (slugs.length === 0) {
	console.error('No slugs found in components manifest.');
	process.exit(1);
}

const captureMode = async (currentMode) => {
	const baseUrl = resolveBaseUrl(currentMode);
	if (!baseUrl) {
		console.error(
			`Missing base URL for ${currentMode}. Usage: node scripts/capture-component-screenshots.mjs --mode <remote|local|all> [--baseUrl <url>] [--remoteBase <url>] [--localBase <url>]`
		);
		process.exit(1);
	}

	const outputDir = path.join(pkgRoot, 'artifacts', 'screenshots', currentMode);
	await mkdir(outputDir, { recursive: true });

	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext({
		viewport: { width: 1440, height: 2200 }
	});
	const page = await context.newPage();

	for (const slug of slugs) {
		const url = `${baseUrl}/${slug}`;
		const outputPath = path.join(outputDir, `${slug}.png`);
		try {
			await page.goto(url, { waitUntil: 'networkidle', timeout: 90000 });
			await page.waitForTimeout(1200);
			await page.screenshot({
				path: outputPath,
				fullPage: true
			});
			console.log(`captured ${currentMode}: ${slug}`);
		} catch (error) {
			console.error(`failed ${currentMode}: ${slug}:`, error);
		}
	}

	await context.close();
	await browser.close();
};

if (mode === 'all') {
	await captureMode('remote');
	await captureMode('local');
} else if (mode === 'remote' || mode === 'local') {
	await captureMode(mode);
} else {
	console.error(`Unsupported mode "${mode}". Use remote, local, or all.`);
	process.exit(1);
}
