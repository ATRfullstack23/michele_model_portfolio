<script>
	import { fade } from 'svelte/transition';
	import PhotographerCredit from '$lib/components/PhotographerCredit.svelte';

	/**
	 * Mixed grid (5×2): R1 / R2 on different rows; h1 not beside R shots; photographers interleaved.
	 */
	const headshot_list = [
		{ label: 'Look 01', image_src: '/michele_images/ab.webp', instagram_user: 'tolga.manasirli' },
		{ label: 'Look 02', image_src: '/michele_images/h1.webp', instagram_user: 'figuracorporis' },
		{ label: 'Look 03', image_src: '/michele_images/h8.webp', instagram_user: 'homiliusphotographie' },
		{ label: 'Look 04', image_src: '/michele_images/h9.webp', instagram_user: 'matzeonfilm' },
		{ label: 'Look 05', image_src: '/michele_images/R1.webp', instagram_user: 'defrance.images' },
		{ label: 'Look 06', image_src: '/michele_images/h7.webp', instagram_user: 'defrance.images' },
		{ label: 'Look 07', image_src: '/michele_images/R2.webp', instagram_user: 'defrance.images' },
		{ label: 'Look 08', image_src: '/michele_images/h6.webp', instagram_user: 'tolga.manasirli' },
		{ label: 'Look 09', image_src: '/michele_images/about_img.webp', instagram_user: 'defrance.images' },
		{ label: 'Look 10', image_src: '/michele_images/h3.webp', instagram_user: 'defrance.images' }
	];

	/** @type {{ image_src: string, label: string, instagram_user: string } | null} */
	let lightbox = $state(null);

	function open_lightbox(head_item) {
		lightbox = {
			image_src: head_item.image_src,
			label: head_item.label,
			instagram_user: head_item.instagram_user || ''
		};
	}

	function close_lightbox() {
		lightbox = null;
	}

	/** @param {KeyboardEvent} e */
	function on_photo_keydown(e, head_item) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			open_lightbox(head_item);
		}
	}

	/** @param {KeyboardEvent} e */
	function on_window_keydown(e) {
		if (e.key === 'Escape') close_lightbox();
	}

	$effect(() => {
		if (!lightbox) return;
		const prev_overflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = prev_overflow;
		};
	});
</script>

<svelte:window onkeydown={on_window_keydown} />

<section id="portraits" class="head_band">
	<h2 class="head_title">Portraits &amp; Stories</h2>
	<div class="head_row">
		{#each headshot_list as head_item (head_item.image_src)}
			<article class="head_cell">
				<div
					class="head_photo"
					style="--head-image: url('{head_item.image_src}');"
					role="button"
					tabindex="0"
					aria-label="View full size: {head_item.label}"
					onclick={() => open_lightbox(head_item)}
					onkeydown={(e) => on_photo_keydown(e, head_item)}
				></div>
				{#if head_item.instagram_user}
					<div class="head_cell_credit">
						<PhotographerCredit instagram_user={head_item.instagram_user} />
					</div>
				{/if}
			</article>
		{/each}
	</div>
</section>

{#if lightbox}
	<div
		class="lightbox_backdrop"
		role="presentation"
		onclick={close_lightbox}
		transition:fade={{ duration: 180 }}
	>
		<div
			class="lightbox_panel"
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			aria-label={lightbox.label}
			onclick={(e) => e.stopPropagation()}
			onkeydown={(e) => e.stopPropagation()}
		>
			<button type="button" class="lightbox_close" onclick={close_lightbox} aria-label="Close">
				<span aria-hidden="true">×</span>
			</button>
			<img class="lightbox_img" src={lightbox.image_src} alt={lightbox.label} />
			<p class="lightbox_caption">{lightbox.label}</p>
			{#if lightbox.instagram_user}
				<div class="lightbox_credit">
					<PhotographerCredit instagram_user={lightbox.instagram_user} />
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.head_band {
		background: linear-gradient(180deg, #070506 0%, #0a0809 100%);
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
		letter-spacing: 0.02em;
		text-align: center;
		margin: 0 0 2rem;
		color: var(--text-1);
	}

	.head_row {
		display: grid;
		gap: 0.85rem;
		margin: 0 auto;
	}

	@media (min-width: 901px) {
		.head_row {
			grid-template-columns: repeat(5, minmax(0, 1fr));
			max-width: min(1180px, 100%);
		}
	}

	.head_cell {
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}

	.head_cell_credit {
		margin-top: 0.2rem;
		text-align: left;
	}

	.head_cell_credit :global(.photo_credit) {
		margin-top: 0;
		text-align: left;
	}

	.head_photo {
		width: 100%;
		aspect-ratio: 3 / 4;
		border-radius: 6px;
		background-image: var(--head-image);
		background-size: cover;
		background-position: center 20%;
		box-shadow:
			0 16px 40px rgba(0, 0, 0, 0.45),
			0 0 0 1px rgba(232, 180, 194, 0.06);
		transition:
			transform 420ms ease,
			box-shadow 420ms ease;
	}

	.head_photo:focus-visible {
		outline: 2px solid var(--accent-rose);
		outline-offset: 3px;
	}

	.head_cell:hover .head_photo {
		transform: scale(1.03);
		box-shadow:
			0 20px 48px rgba(0, 0, 0, 0.5),
			0 0 36px rgba(232, 180, 194, 0.12);
	}

	.lightbox_backdrop {
		position: fixed;
		inset: 0;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: clamp(0.75rem, 3vw, 2rem);
		background: rgba(4, 2, 3, 0.88);
		backdrop-filter: blur(8px);
	}

	.lightbox_panel {
		position: relative;
		max-width: min(1040px, 100%);
		max-height: min(92vh, 100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
	}

	.lightbox_close {
		position: absolute;
		top: -0.25rem;
		right: 0;
		transform: translateY(-100%);
		margin-bottom: 0.35rem;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		border: 1px solid rgba(232, 180, 194, 0.35);
		background: rgba(12, 8, 10, 0.85);
		color: var(--text-1);
		font-size: 1.35rem;
		line-height: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		transition:
			background 200ms ease,
			border-color 200ms ease,
			color 200ms ease;
	}

	.lightbox_close:hover {
		background: rgba(232, 180, 194, 0.12);
		border-color: rgba(232, 180, 194, 0.55);
		color: var(--accent-rose);
	}

	.lightbox_close:focus-visible {
		outline: 2px solid var(--accent-rose);
		outline-offset: 2px;
	}

	.lightbox_img {
		display: block;
		max-width: 100%;
		max-height: min(84vh, 960px);
		width: auto;
		height: auto;
		object-fit: contain;
		border-radius: 8px;
		box-shadow:
			0 24px 64px rgba(0, 0, 0, 0.55),
			0 0 0 1px rgba(232, 180, 194, 0.12);
	}

	.lightbox_caption {
		margin: 0;
		font-family: var(--font-body);
		font-size: 0.72rem;
		letter-spacing: 0.14rem;
		text-transform: uppercase;
		color: var(--text-2);
	}

	.lightbox_credit {
		align-self: stretch;
		text-align: left;
	}

	.lightbox_credit :global(.photo_credit) {
		margin-top: 0.35rem;
		text-align: left;
	}

	@media (max-width: 900px) {
		.head_row {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			max-width: min(560px, 100%);
			gap: 0.85rem;
		}

		.lightbox_close {
			top: 0.5rem;
			right: 0.5rem;
			transform: none;
		}

		.lightbox_panel {
			padding-top: 2.5rem;
		}
	}
</style>
