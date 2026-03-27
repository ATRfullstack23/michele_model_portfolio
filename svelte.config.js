import adapter from '@sveltejs/adapter-vercel';
import { relative, sep } from 'node:path';

/**
 * GitHub **project** site: build with BASE_PATH=/repo-name so assets resolve.
 * Vercel custom domain: leave unset (default '').
 */
const base_path_raw =
	typeof process.env.BASE_PATH === 'string'
		? process.env.BASE_PATH.replace(/\/$/, '').trim()
		: '';
const base = base_path_raw === '.' || base_path_raw === '' ? '' : base_path_raw;

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
		adapter: adapter(),
		prerender: {
			origin:
				process.env.PUBLIC_SITE_URL ||
				(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:4173'),
			handleHttpError: 'warn'
		}
	}
};

export default config;
