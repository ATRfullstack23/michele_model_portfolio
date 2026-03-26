
import { relative, sep } from 'node:path';

/**
 * GitHub **user** site (username.github.io) or custom domain: leave BASE_PATH unset (default '').
 * GitHub **project** site (username.github.io/REPO): build with repo name, e.g.
 *   PowerShell: $env:BASE_PATH='/REPO'; npm run build
 *   bash: BASE_PATH=/REPO npm run build
 */
import adapter from '@sveltejs/adapter-vercel';


const base =
	typeof process.env.BASE_PATH === 'string'
		? process.env.BASE_PATH.replace(/\/$/, '') || ''
		: '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// defaults to rune mode for the project, execept for `node_modules`. Can be removed in svelte 6.
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes('node_modules');

			return isExternalLibrary ? undefined : true;
		}
	},
	kit: {
		paths: { base },
		// Static HTML/CSS/JS in ./build — upload **contents** of ./build so index.html sits at the host root (not inside src/).
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			strict: true
		})
	}
};
export default {
	kit: {
		adapter: adapter()
	}
}

