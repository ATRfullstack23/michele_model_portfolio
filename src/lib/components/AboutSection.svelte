<script>
	import PhotographerCredit from '$lib/components/PhotographerCredit.svelte';
</script>

<section id="about" class="about_block">
	<div class="about_split">
		<figure class="about_figure">
			<div
				class="about_photo"
				style="--about-image: url('/michele_images/h2.webp');"
				role="img"
				aria-label="Michela portrait"
			></div>
			<figcaption class="about_photo_credit">
				<PhotographerCredit instagram_user="figuracorporis" />
			</figcaption>
		</figure>

		<div class="about_copy">
			<h2>Intimate, suggestive, implied.</h2>
			<p class="about_lead">
				Italian model based in Berlin, specializing in lingerie and beauty portraits.
			</p>
			<p class="about_body">
				I explore forms of sensuality that are intimate, suggestive, implied rather than shown.
			</p>
			<p class="about_body">
				My work combines a refined aesthetic with a bold, modern femininity.
			</p>

			<div class="model_details_card">
				<p class="model_details_label">Model details</p>
				<dl class="measure_table">
					<div class="measure_row">
						<dt>Height</dt>
						<dd>163 cm</dd>
					</div>
					<div class="measure_row">
						<dt>Overbust</dt>
						<dd>88 cm</dd>
					</div>
					<div class="measure_row">
						<dt>Underbust</dt>
						<dd>77 cm</dd>
					</div>
					<div class="measure_row">
						<dt>Waist</dt>
						<dd>71 cm</dd>
					</div>
					<div class="measure_row">
						<dt>Hips</dt>
						<dd>100 cm</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</section>

<style>
	.about_block {
		background: #050303;
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
		gap: 3rem;
		align-items: start;
		max-width: min(1080px, 100%);
		margin: 0 auto;
	}

	.about_figure {
		margin: 0;
		width: 100%;
		max-width: min(420px, 100%);
		margin-inline: auto;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.about_photo_credit :global(.photo_credit) {
		margin-top: 0.4rem;
		text-align: left;
	}

	.about_photo {
		width: 100%;
		aspect-ratio: 3 / 4;
		min-height: 0;
		border-radius: 8px;
		background-image: var(--about-image);
		background-size: cover;
		background-position: center 22%;
		box-shadow:
			0 24px 60px rgba(0, 0, 0, 0.4),
			0 0 0 1px rgba(232, 180, 194, 0.08);
	}

	.about_copy h2 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(1.65rem, 3.2vw, 2.35rem);
		letter-spacing: 0.02em;
		margin: 0 0 1.25rem;
		color: var(--text-1);
		line-height: 1.15;
	}

	.about_lead {
		margin: 0 0 1rem;
		font-family: var(--font-body);
		color: var(--text-1);
		line-height: 1.75;
		font-size: 0.98rem;
		font-weight: 500;
	}

	.about_body {
		margin: 0 0 1rem;
		font-family: var(--font-body);
		color: var(--text-2);
		line-height: 1.8;
		font-size: 0.94rem;
	}

	.about_body:last-of-type {
		margin-bottom: 2rem;
	}

	.model_details_card {
		padding: 1.35rem 1.5rem;
		border-radius: 8px;
		border: 1px solid rgba(232, 180, 194, 0.12);
		background: linear-gradient(155deg, rgba(232, 180, 194, 0.05) 0%, rgba(8, 6, 7, 0.65) 100%);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
	}

	.model_details_label {
		margin: 0 0 1rem;
		font-family: var(--font-body);
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		color: var(--accent-rose);
	}

	.measure_table {
		margin: 0;
	}

	.measure_row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		padding: 0.7rem 0;
		border-bottom: 1px solid rgba(232, 180, 194, 0.1);
	}

	.measure_row:first-of-type {
		border-top: 1px solid rgba(232, 180, 194, 0.1);
	}

	.measure_row dt {
		margin: 0;
		font-family: var(--font-body);
		font-size: 0.64rem;
		letter-spacing: 0.12rem;
		text-transform: uppercase;
		color: var(--text-3);
	}

	.measure_row dd {
		margin: 0;
		text-align: right;
		font-family: var(--font-body);
		color: var(--text-1);
		font-size: 0.86rem;
	}

	@media (max-width: 880px) {
		.about_split {
			grid-template-columns: 1fr;
		}

		.about_figure {
			max-width: min(340px, 88vw);
		}
	}
</style>
