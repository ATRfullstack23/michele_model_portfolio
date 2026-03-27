<section id="home" class="hero">
	<div class="hero_bg" style="--hero-image: url('/michele_images/LP.webp');"></div>
	<div class="hero_dim"></div>

	<p class="hero_role">Sensual Fine Art Model</p>

	<div class="hero_center">
		<h1 class="hero_name">Michela</h1>
		<p class="hero_tagline">Let us build the next frame together</p>
		<a href="#gallery" class="hero_cta">View gallery</a>
	</div>

	<p class="hero_cities">Berlin · Fine art · Beauty</p>
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
	}

	@media (min-width: 881px) {
		.hero_bg {
			background-image: url('/michele_images/pc_l4.jpeg');
			background-position: center 22%;
		}
	}

	.hero_dim {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			185deg,
			rgba(8, 5, 7, 0.25) 0%,
			rgba(12, 8, 11, 0.55) 42%,
			rgba(18, 10, 14, 0.82) 100%
		);
	}

	.hero_dim::after {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse 90% 70% at 70% 20%,
			rgba(232, 180, 194, 0.08) 0%,
			transparent 55%
		);
		pointer-events: none;
	}

	.hero_role {
		position: absolute;
		z-index: 2;
		top: clamp(4.5rem, 10vh, 6.5rem);
		right: clamp(1rem, 4vw, 2.5rem);
		left: auto;
		margin: 0;
		max-width: min(14rem, 52vw);
		text-align: right;
		font-family: var(--font-body);
		font-weight: 400;
		font-size: clamp(0.58rem, 1.5vw, 0.72rem);
		letter-spacing: 0.22rem;
		text-transform: uppercase;
		color: rgba(245, 238, 240, 0.88);
		line-height: 1.5;
		text-shadow: 0 0 28px rgba(232, 180, 194, 0.35);
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
		transform: translateY(0.75rem);
	}

	.hero_name {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(2.35rem, 7.5vw, 4.6rem);
		line-height: 1.02;
		letter-spacing: 0.02em;
		margin: 0;
		color: #fff8fa;
		text-shadow:
			0 2px 32px rgba(0, 0, 0, 0.45),
			0 0 60px rgba(232, 180, 194, 0.2);
	}

	.hero_tagline {
		margin: 1rem 0 0;
		font-family: var(--font-display);
		font-size: clamp(1rem, 2.4vw, 1.35rem);
		font-style: italic;
		font-weight: 500;
		letter-spacing: 0.04em;
		color: rgba(245, 238, 240, 0.92);
		line-height: 1.45;
		max-width: 28ch;
	}

	.hero_cta {
		display: inline-block;
		margin-top: 1.65rem;
		padding: 0.72rem 1.5rem;
		font-family: var(--font-body);
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.22rem;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--text-1);
		background: rgba(12, 8, 10, 0.55);
		border: 1px solid rgba(232, 180, 194, 0.4);
		border-radius: 3px;
		backdrop-filter: blur(14px);
		box-shadow:
			0 10px 32px rgba(0, 0, 0, 0.4),
			0 0 24px rgba(232, 180, 194, 0.12);
		transition:
			transform 280ms ease,
			background 280ms ease,
			border-color 280ms ease,
			box-shadow 280ms ease;
	}

	.hero_cta:hover {
		transform: translateY(-3px);
		background: rgba(232, 180, 194, 0.12);
		border-color: rgba(232, 180, 194, 0.65);
		box-shadow:
			0 14px 36px rgba(0, 0, 0, 0.45),
			0 0 36px rgba(232, 180, 194, 0.22);
	}

	.hero_cities {
		position: absolute;
		z-index: 2;
		right: clamp(1rem, 4vw, 2.5rem);
		bottom: clamp(1rem, 3vw, 2rem);
		margin: 0;
		font-size: 0.58rem;
		letter-spacing: 0.24rem;
		text-transform: uppercase;
		color: var(--text-3);
		opacity: 0.9;
	}

	@media (max-width: 880px) {
		.hero_bg {
			background-position: center;
		}

		.hero {
			padding-bottom: clamp(4rem, 16vh, 9rem);
		}

		.hero_role {
			top: clamp(4.25rem, 11vh, 5.5rem);
			max-width: min(11rem, 48vw);
			font-size: 0.56rem;
			letter-spacing: 0.18rem;
		}

		.hero_center {
			padding-left: clamp(1.25rem, 5vw, 2rem);
			padding-right: clamp(1.25rem, 5vw, 2rem);
		}
	}
</style>
