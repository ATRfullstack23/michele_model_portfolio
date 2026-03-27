import { base } from '$app/paths';

/** Built into the deploy output so prerender link checks never 404 */
export const prerender = true;

const icon_path = (file) => `${base}/${file}`.replace(/\/{2,}/g, '/');

const manifest_body = {
	name: 'Michela — Sensual fine art model · Berlin',
	short_name: 'Michela',
	description:
		'Italian sensual fine art model based in Berlin. Lingerie, beauty, and intimate editorial frames.',
	start_url: base ? `${base}/` : '/',
	display: 'standalone',
	background_color: '#070506',
	theme_color: '#0c0a0b',
	icons: [
		{
			src: icon_path('meta.jpeg'),
			sizes: '512x512',
			type: 'image/jpeg',
			purpose: 'any'
		},
		{
			src: icon_path('meta.jpeg'),
			sizes: '192x192',
			type: 'image/jpeg',
			purpose: 'any'
		},
		{
			src: icon_path('favicon.svg'),
			sizes: 'any',
			type: 'image/svg+xml',
			purpose: 'any'
		}
	]
};

/** @type {import('@sveltejs/kit').RequestHandler} */
export function GET() {
	return new Response(JSON.stringify(manifest_body, null, '\t'), {
		headers: {
			'Content-Type': 'application/manifest+json; charset=utf-8',
			'Cache-Control': 'public, max-age=86400'
		}
	});
}
