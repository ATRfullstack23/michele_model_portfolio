<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroDashboard from '$lib/components/HeroDashboard.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import HeadshotsSection from '$lib/components/HeadshotsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
</script>

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
