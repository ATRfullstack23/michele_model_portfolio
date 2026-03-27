<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { env } from '$env/dynamic/public';
	import {
		site_description,
		site_title,
		share_image_path,
		share_image_type
	} from '$lib/site_seo.js';

	let { children } = $props();

	const canonical_url = $derived(page.url.href.split('#')[0]);

	/** Static asset URLs respect SvelteKit `paths.base` (GitHub Pages, etc.) */
	const favicon_svg_href = $derived(`${base}/favicon.svg`.replace(/\/{2,}/g, '/'));
	const favicon_raster_href = $derived(`${base}/meta.jpeg`.replace(/\/{2,}/g, '/'));
	const manifest_href = $derived(`${base}/site.webmanifest`.replace(/\/{2,}/g, '/'));

	/** WhatsApp/Meta need HTTPS absolute image URL; set PUBLIC_SITE_URL on Vercel to your real domain */
	const og_image_url = $derived.by(() => {
		const u = env.PUBLIC_SITE_URL;
		const origin =
			typeof u === 'string' && u.length > 0 ? u.replace(/\/$/, '') : page.url.origin;
		const path_base = !base || base === '.' ? '' : base;
		const path_joined = `${path_base}${share_image_path}`.replace(/\/{2,}/g, '/');
		try {
			return new URL(path_joined, origin).href;
		} catch {
			return `${origin}${path_joined}`;
		}
	});
</script>

<svelte:head>
	<title>{site_title}</title>
	<meta name="description" content={site_description} />

	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Michela" />
	<meta property="og:title" content={site_title} />
	<meta property="og:description" content={site_description} />
	<meta property="og:url" content={canonical_url} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:image" content={og_image_url} />
	<meta property="og:image:secure_url" content={og_image_url} />
	<meta property="og:image:type" content={share_image_type} />
	<meta property="og:image:alt" content="Michela — sensual fine art model, Berlin" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site_title} />
	<meta name="twitter:description" content={site_description} />
	<meta name="twitter:image" content={og_image_url} />

	<meta name="theme-color" content="#070506" />
	<meta name="apple-mobile-web-app-title" content="Michela" />
	<meta name="application-name" content="Michela" />

	<link rel="canonical" href={canonical_url} />
	<link rel="icon" type="image/svg+xml" href={favicon_svg_href} sizes="any" />
	<link rel="icon" type="image/jpeg" href={favicon_raster_href} sizes="512x512" />
	<link rel="shortcut icon" type="image/jpeg" href={favicon_raster_href} />
	<link rel="apple-touch-icon" href={favicon_raster_href} sizes="180x180" />
	<link rel="manifest" href={manifest_href} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}
