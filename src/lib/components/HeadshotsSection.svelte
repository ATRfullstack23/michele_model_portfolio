<script>
	const headshot_list = [
		{ label: 'Look 01', image_src: '/images/c6.jpeg' },
		{ label: 'Look 02', image_src: '/images/c7.jpeg' },
		{ label: 'Look 03', image_src: '/images/c9.jpeg' },
		{ label: 'Look 04', image_src: '/images/g7.jpeg' },
		{ label: 'Look 05', image_src: '/images/g4.jpeg' },
		{ label: 'Look 06', image_src: '/images/g5.jpeg' },
		{ label: 'Look 07', image_src: '/images/g6.jpeg' },
		{ label: 'Look 08', image_src: '/images/g8.jpeg' }
	];
</script>

<section id="headshots" class="head_band">
	<h2 class="head_title">Polished Headshots</h2>
	<div class="head_row">
		{#each headshot_list as head_item (head_item.label)}
			<article class="head_cell">
				<div
					class="head_photo"
					style="--head-image: url('{head_item.image_src}');"
					role="img"
					aria-label={head_item.label}
				></div>
			</article>
		{/each}
	</div>
</section>

<style>
	.head_band {
		background: #080808;
		padding: 4rem 0 4.5rem;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
		width: 100vw;
		padding-left: clamp(1rem, 4vw, 4.5rem);
		padding-right: clamp(1rem, 4vw, 4.5rem);
	}

	.head_title {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(1.5rem, 2.8vw, 2.1rem);
		letter-spacing: -0.01em;
		text-align: center;
		margin: 0 0 2rem;
		color: var(--text-1);
	}

	.head_row {
		display: grid;
		grid-template-columns: repeat(8, minmax(0, 1fr));
		gap: 1rem;
		max-width: min(1680px, 100%);
		margin: 0 auto;
	}

	.head_cell {
		margin: 0;
	}

	.head_photo {
		width: 100%;
		aspect-ratio: 3 / 4;
		border-radius: 4px;
		background-image: var(--head-image);
		background-size: cover;
		background-position: center 20%;
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
		transition: transform 400ms ease;
	}

	.head_cell:hover .head_photo {
		transform: scale(1.03);
	}

	@media (max-width: 1600px) {
		.head_row {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (max-width: 1100px) {
		.head_row {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 900px) {
		.head_row {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
