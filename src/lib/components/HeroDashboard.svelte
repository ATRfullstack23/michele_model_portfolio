<section id="home" class="hero">
	<div class="hero_bg" style="--hero-image: url('/images/l1.jpeg');"></div>
	<div class="hero_dim"></div>

	<div class="hero_center">
		<h1 class="hero_name"><em>Michele</em></h1>
		<a href="#projects" class="hero_cta">View portfolio</a>
	</div>

	<p class="hero_cities">Fashion · Berlin · Germany</p>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		padding-bottom: clamp(4.5rem, 14vh, 11rem);
		overflow: hidden;
	}

	.hero_bg {
		position: absolute;
		inset: 0;
		background-image: var(--hero-image);
		background-size: cover;
		background-position: center 22%;
	}

	.hero_dim {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(12, 11, 10, 0.35) 0%,
			rgba(12, 11, 10, 0.55) 45%,
			rgba(12, 11, 10, 0.75) 100%
		);
	}

	.hero_center {
		position: relative;
		z-index: 2;
		text-align: left;
		padding: 0 clamp(1.25rem, 4vw, 2.5rem) 0;
		padding-left: clamp(1.25rem, 4vw, 2.5rem);
		padding-right: clamp(4.75rem, 12vw, 8rem);
		max-width: min(52rem, 100%);
		margin-top: 0;
		margin-bottom: 0;
	}

	.hero_name {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(2.25rem, 7vw, 4.35rem);
		line-height: 1.02;
		letter-spacing: -0.02em;
		margin: 0;
		color: #ffffff;
		text-shadow: 0 4px 48px rgba(0, 0, 0, 0.5);
	}

	.hero_name em {
		font-style: italic;
		font-weight: 600;
	}

	.hero_cta {
		display: inline-block;
		margin-top: 1.5rem;
		padding: 0.65rem 1.35rem;
		font-family: var(--font-body);
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--text-1);
		background: rgba(0, 0, 0, 0.45);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 2px;
		backdrop-filter: blur(12px);
		box-shadow: 0 8px 28px rgba(0, 0, 0, 0.35);
		transition: transform 220ms ease, background 220ms ease, border-color 220ms ease;
	}

	.hero_cta:hover {
		transform: translateY(-2px);
		background: rgba(0, 0, 0, 0.62);
		border-color: rgba(255, 255, 255, 0.32);
	}

	.hero_cities {
		position: absolute;
		z-index: 2;
		right: clamp(1rem, 4vw, 2.5rem);
		bottom: clamp(1rem, 3vw, 2rem);
		margin: 0;
		font-size: 0.6rem;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		color: var(--text-2);
		opacity: 0.92;
	}

	@media (max-width: 880px) {
		.hero {
			padding-bottom: clamp(4rem, 16vh, 9rem);
		}

		.hero_center {
			padding-left: clamp(1.25rem, 5vw, 2rem);
			padding-right: clamp(1.25rem, 5vw, 2rem);
		}
	}
</style>
