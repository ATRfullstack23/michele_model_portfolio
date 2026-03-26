<section id="about" class="about_block">
	<div class="about_split">
		<div
			class="about_photo"
			style="--about-image: url('/images/ab.jpeg');"
			role="img"
			aria-label="Michele portrait"
		></div>

		<div class="about_copy">
			<h2>Beyond the Frame.</h2>
			<p class="about_lead">
				I am a Berlin-based fashion model with an editorial focus—calm under long shoot days, precise with
				direction, and drawn to frames that favour restraint over noise. Work crosses runway, lookbooks, and
				campaigns across Germany and Europe; collaboration with photographers and directors always comes first.
			</p>

			<dl class="measure_table">
				<div class="measure_row">
					<dt>Height</dt>
					<dd>178 cm / 5'10"</dd>
				</div>
				<div class="measure_row">
					<dt>Bust</dt>
					<dd>81 cm / 32"</dd>
				</div>
				<div class="measure_row">
					<dt>Waist</dt>
					<dd>63 cm / 25"</dd>
				</div>
				<div class="measure_row">
					<dt>Hips</dt>
					<dd>90 cm / 35"</dd>
				</div>
				<div class="measure_row">
					<dt>Eyes</dt>
					<dd>Hazel green</dd>
				</div>
			</dl>
		</div>
	</div>

	<div id="experience" class="about_timeline">
		<article class="timeline_piece">
			<span>2018</span>
			<p>Entered the German market with a print-led book and sharpened runway pacing.</p>
		</article>
		<article class="timeline_piece">
			<span>2021</span>
			<p>Berlin Fashion Week and EU campaigns—editorials and beauty brands on location and in studio.</p>
		</article>
		<article class="timeline_piece">
			<span>2024</span>
			<p>Berlin-based with bookings in Hamburg, Munich, and selective international fashion weeks.</p>
		</article>
	</div>
</section>

<style>
	.about_block {
		background: #050505;
		color: var(--text-1);
		padding: 4rem 0;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
		width: 100vw;
		padding-left: clamp(1rem, 4vw, 4.5rem);
		padding-right: clamp(1rem, 4vw, 4.5rem);
	}

	.about_split {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem;
		align-items: center;
		max-width: min(1080px, 100%);
		margin: 0 auto;
	}

	.about_photo {
		min-height: min(520px, 65vh);
		border-radius: 6px;
		background-image: var(--about-image);
		background-size: cover;
		background-position: center 25%;
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
	}

	.about_copy h2 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(1.65rem, 3.2vw, 2.35rem);
		letter-spacing: -0.01em;
		margin: 0 0 1rem;
		color: var(--text-1);
	}

	.about_lead {
		margin: 0 0 2rem;
		font-family: var(--font-body);
		color: var(--text-2);
		line-height: 1.75;
		font-size: 0.98rem;
	}

	.measure_table {
		margin: 0;
	}

	.measure_row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		padding: 0.75rem 0;
		border-bottom: 1px solid rgba(245, 241, 232, 0.14);
	}

	.measure_row:first-of-type {
		border-top: 1px solid rgba(245, 241, 232, 0.14);
	}

	.measure_row dt {
		margin: 0;
		font-family: var(--font-body);
		font-size: 0.64rem;
		letter-spacing: 0.14rem;
		text-transform: uppercase;
		color: var(--text-gold);
	}

	.measure_row dd {
		margin: 0;
		text-align: right;
		font-family: var(--font-body);
		color: var(--text-1);
		font-size: 0.86rem;
	}

	#experience {
		scroll-margin-top: 5rem;
	}

	.about_timeline {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
		max-width: min(1080px, 100%);
		margin: 3rem auto 0;
	}

	.timeline_piece {
		padding: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 6px;
		background: rgba(255, 255, 255, 0.03);
	}

	.timeline_piece span {
		display: block;
		font-family: var(--font-body);
		font-size: 0.8rem;
		color: var(--text-gold);
		font-weight: 600;
		margin-bottom: 0.4rem;
	}

	.timeline_piece p {
		margin: 0;
		font-family: var(--font-body);
		color: var(--text-2);
		line-height: 1.55;
		font-size: 0.82rem;
	}

	@media (max-width: 880px) {
		.about_split {
			grid-template-columns: 1fr;
		}

		.about_photo {
			min-height: 360px;
		}

		.about_timeline {
			grid-template-columns: 1fr;
		}
	}
</style>
