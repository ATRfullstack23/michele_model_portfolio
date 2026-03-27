<script>
	import { base } from '$app/paths';
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroDashboard from '$lib/components/HeroDashboard.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import HeadshotsSection from '$lib/components/HeadshotsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';

	const site_title = 'Michela | Sensual fine art model · Berlin';
	const site_description =
		'Michela — Italian sensual fine art model based in Berlin. Lingerie, beauty, and intimate editorial frames.';
	/**
	 * WhatsApp / Facebook crawlers often ignore WebP for link previews — use JPG or PNG under static/.
	 * Ideal: ~1200×630, under ~2 MB. After changing, refresh cache in Meta Sharing Debugger; re-share with ?v=1 on the URL once.
	 */
	const share_image_path = '/images/g9.jpeg';
	const share_image_type = 'image/jpeg';

	const canonical_url = $derived(page.url.href.split('#')[0]);
	const og_image_url = $derived(`${page.url.origin}${base}${share_image_path}`);
</script>

<svelte:head>
	<title>{site_title}</title>
	<meta name="description" content={site_description} />

	<!-- Open Graph (Facebook, LinkedIn, iMessage, etc.) -->
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

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={site_title} />
	<meta name="twitter:description" content={site_description} />
	<meta name="twitter:image" content={og_image_url} />

	<link rel="canonical" href={canonical_url} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar />

<main class="page_shell">
	<HeroDashboard />
	<ProjectsSection />
	<AboutSection />
	<HeadshotsSection />
	<div class="footer_cluster">
		<ContactSection />
		<SiteFooter />
	</div>
	<ScrollToTop />
</main>

<style>
	:global(:root) {
		--font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
		--font-body: 'Outfit', system-ui, -apple-system, sans-serif;
		--text-1: #f5eef0;
		--text-2: #c4b8bc;
		--text-3: #8a7f84;
		/* Soft rose accent — editorial, not loud */
		--accent-rose: #e8b4c2;
		--accent-rose-deep: #c995a6;
		--accent-rose-soft: rgba(232, 180, 194, 0.12);
		--accent-rose-glow: rgba(232, 180, 194, 0.45);
		--text-gold: #e8b4c2;
		--text-ink: #0c0a0b;
		--surface-void: #070506;
		--surface-card: #100d0e;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
		font-size: 88%;
		/* 100vw full-bleed sections include scrollbar gutter; clip prevents horizontal scroll. */
		overflow-x: clip;
	}

	:global(body) {
		margin: 0;
		overflow-x: clip;
		font-family: var(--font-body);
		font-weight: 400;
		letter-spacing: 0.02em;
		background: var(--surface-void);
		color: var(--text-1);
		-webkit-font-smoothing: antialiased;
	}

	:global(section) {
		scroll-margin-top: 5rem;
	}

	.page_shell {
		min-height: 100vh;
	}

	.footer_cluster {
		max-width: min(1080px, calc(100% - 2rem));
		margin: 0 auto;
		padding: 0 clamp(0.5rem, 2vw, 1rem);
	}
</style>
