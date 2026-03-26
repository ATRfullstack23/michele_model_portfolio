<script>
	const featured_title = 'Natural Treat';
	const featured_desc =
		'A quiet study in tone and silhouette—sunlight through linen, negative space, and posture held like a note held in the air.';
</script>

<section id="projects" class="works_section">
	<header class="works_header">
		<h2>Recent Works</h2>
		<p class="works_intro">
			Editorials built for light and line: full-length studies, intimate close-ups, and campaign frames that stay
			cohesive across seasons.
		</p>
	</header>

	<div class="masonry">
		<div
			class="cell cell_tall"
			style="--img: url('/images/c2.jpeg');"
			role="img"
			aria-label="Editorial full length"
		></div>
		<div
			class="cell cell_close"
			style="--img: url('/images/c3.jpeg');"
			role="img"
			aria-label="Portrait close-up"
		></div>
		<article class="cell cell_copy glass_edge">
			<h3>{featured_title}</h3>
			<p>{featured_desc}</p>
		</article>
		<div
			class="cell cell_square"
			style="--img: url('/images/g9.jpeg');"
			role="img"
			aria-label="Square editorial"
		></div>
		<div
			class="cell cell_wide"
			style="--img: url('/images/c5.jpeg');"
			role="img"
			aria-label="Wide campaign frame"
		></div>
	</div>
</section>

<style>
	.works_section {
		padding: 4rem 0 3rem;
		background: #0a0a0a;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
		width: 100vw;
		padding-left: clamp(1rem, 4vw, 4.5rem);
		padding-right: clamp(1rem, 4vw, 4.5rem);
		padding-top: 4rem;
		padding-bottom: 3.5rem;
	}

	.works_header {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		align-items: end;
		max-width: min(1080px, 100%);
		margin: 0 auto 2rem;
	}

	.works_header h2 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(1.65rem, 3.2vw, 2.45rem);
		letter-spacing: -0.01em;
		margin: 0;
		color: var(--text-1);
	}

	.works_intro {
		margin: 0;
		text-align: right;
		font-family: var(--font-body);
		color: var(--text-2);
		line-height: 1.75;
		font-size: 0.88rem;
		max-width: 42ch;
		justify-self: end;
	}

	/* Narrower than works_header: tiles stay square (1:1) but physically smaller. */
	.masonry {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: auto auto auto;
		gap: 1rem;
		max-width: min(640px, 100%);
		margin: 0 auto;
		align-items: stretch;
	}

	.cell {
		border-radius: 6px;
		overflow: hidden;
	}

	.cell_tall {
		grid-column: 1;
		grid-row: 1;
		min-width: 0;
		width: 100%;
		min-height: 0;
		aspect-ratio: 1 / 1;
		background-image: var(--img);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		transition: transform 420ms ease;
	}

	.cell_close {
		grid-column: 2;
		grid-row: 1;
		min-height: 0;
		aspect-ratio: 1 / 1;
		background-image: var(--img);
		background-size: cover;
		background-position: center 20%;
		transition: transform 420ms ease;
	}

	.cell_copy {
		grid-column: 1 / -1;
		grid-row: 2;
		padding: 1.35rem 1.5rem;
		align-self: stretch;
	}

	.cell_copy h3 {
		font-family: var(--font-display);
		font-weight: 600;
		margin: 0 0 0.6rem;
		font-size: 1.28rem;
		letter-spacing: -0.01em;
		color: var(--text-1);
	}

	.cell_copy p {
		margin: 0;
		font-family: var(--font-body);
		color: var(--text-2);
		line-height: 1.65;
		font-size: 0.84rem;
	}

	.cell_square {
		grid-column: 1;
		grid-row: 3;
		min-height: 0;
		aspect-ratio: 1 / 1;
		background-image: var(--img);
		background-size: cover;
		background-position: center;
		transition: transform 420ms ease;
	}

	.cell_wide {
		grid-column: 2;
		grid-row: 3;
		min-height: 0;
		aspect-ratio: 1 / 1;
		background-image: var(--img);
		background-size: cover;
		background-position: center 35%;
		transition: transform 420ms ease;
	}

	.cell_tall:hover,
	.cell_close:hover,
	.cell_square:hover,
	.cell_wide:hover {
		transform: scale(1.02);
	}

	.glass_edge {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(14px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
	}

	@media (max-width: 900px) {
		.works_header {
			grid-template-columns: 1fr;
		}

		.works_intro {
			text-align: left;
			justify-self: start;
		}

		.masonry {
			grid-template-columns: 1fr;
			max-width: min(430px, 100%);
		}

		.cell_tall,
		.cell_close,
		.cell_square,
		.cell_wide {
			grid-column: 1;
			grid-row: auto;
			aspect-ratio: 1 / 1;
			min-height: unset;
			height: auto;
			width: 100%;
			max-height: none;
			background-size: cover;
			background-position: center center;
			background-repeat: no-repeat;
		}

		.cell_copy {
			grid-column: 1;
			grid-row: auto;
		}
	}
</style>
