<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import { env } from '$env/dynamic/public';
	import {
		og_description,
		og_title,
		site_description,
		site_public_origin_default,
		site_title,
		share_image_height,
		share_image_path,
		share_image_type,
		share_image_width
	} from '$lib/site_seo.js';

	let { children } = $props();

	const is_local_origin = (origin) =>
		/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);

	/**
	 * Same host for og:url and og:image as the link people share.
	 * Order: PUBLIC_SITE_URL → live request host → production fallback (fixes prerender host mismatch).
	 */
	const public_site_origin = $derived.by(() => {
		const u = env.PUBLIC_SITE_URL;
		if (typeof u === 'string' && u.length > 0) return u.replace(/\/$/, '');
		const po = page.url.origin || '';
		if (po && !is_local_origin(po)) return po.replace(/\/$/, '');
		return site_public_origin_default.replace(/\/$/, '');
	});

	const canonical_url = $derived.by(() => {
		const fixed = public_site_origin;
		if (fixed) {
			const path_part =
				`${base}${page.url.pathname}${page.url.search || ''}`.replace(/\/{2,}/g, '/') || '/';
			if (path_part.startsWith('/')) return `${fixed}${path_part}`;
			return `${fixed}/${path_part}`;
		}
		return page.url.href.split('#')[0];
	});

	/** Static asset URLs respect SvelteKit `paths.base` (GitHub Pages, etc.) */
	const favicon_svg_href = $derived(`${base}/favicon.svg`.replace(/\/{2,}/g, '/'));
	const favicon_raster_href = $derived(`${base}/meta.jpeg`.replace(/\/{2,}/g, '/'));
	const manifest_href = $derived(`${base}/site.webmanifest`.replace(/\/{2,}/g, '/'));

	const og_image_url = $derived.by(() => {
		const origin = public_site_origin || page.url.origin;
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
	<meta property="og:title" content={og_title} />
	<meta property="og:description" content={og_description} />
	<meta property="og:url" content={canonical_url} />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:image" content={og_image_url} />
	<meta property="og:image:secure_url" content={og_image_url} />
	<meta property="og:image:type" content={share_image_type} />
	<meta property="og:image:width" content={String(share_image_width)} />
	<meta property="og:image:height" content={String(share_image_height)} />
	<meta property="og:image:alt" content="Michela — sensual fine art model, Berlin" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={og_title} />
	<meta name="twitter:description" content={og_description} />
	<meta name="twitter:image" content={og_image_url} />

	<meta name="theme-color" content="#070506" />
	<meta name="apple-mobile-web-app-title" content="Michela" />
	<meta name="application-name" content="Michela" />

	<link rel="canonical" href={canonical_url} />
	<link rel="image_src" href={og_image_url} />
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
