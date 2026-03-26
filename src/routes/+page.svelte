<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import HeroDashboard from '$lib/components/HeroDashboard.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import HeadshotsSection from '$lib/components/HeadshotsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
</script>

<svelte:head>
	<title>Michele | Fashion model · Berlin</title>
	<meta
		name="description"
		content="Fashion model portfolio for Michele — Berlin-based, working across Germany and Europe."
	/>
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
</main>

<style>
	:global(:root) {
		--font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
		--font-body: 'Outfit', system-ui, -apple-system, sans-serif;
		--text-1: #f4f0e8;
		--text-2: #c9c2b6;
		--text-3: #958f85;
		--text-gold: #d4b87a;
		--text-ink: #14120f;
		--accent-red: #e11d48;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
		font-size: 88%;
	}

	:global(body) {
		margin: 0;
		font-family: var(--font-body);
		font-weight: 400;
		letter-spacing: 0.02em;
		background: #070707;
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
