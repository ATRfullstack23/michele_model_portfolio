import adapter from '@sveltejs/adapter-vercel';
import { relative, sep } from 'node:path';

/**
 * GitHub **project** site: build with BASE_PATH=/repo-name so assets resolve.
 * Vercel custom domain: leave unset (default '').
 */
const base =
	typeof process.env.BASE_PATH === 'string'
		? process.env.BASE_PATH.replace(/\/$/, '') || ''
		: '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes('node_modules');
			return isExternalLibrary ? undefined : true;
		}
	},
	kit: {
		paths: { base },
		adapter: adapter()
	}
};

export default config;
