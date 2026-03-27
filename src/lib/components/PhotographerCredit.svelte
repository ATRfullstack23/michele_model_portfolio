<script>
	/** Instagram username, with or without leading @ */
	let { instagram_user = '' } = $props();

	const trimmed = $derived((instagram_user || '').trim());
	const display = $derived(
		!trimmed ? '' : trimmed.startsWith('@') ? trimmed : `@${trimmed}`
	);
	const slug = $derived(trimmed.replace(/^@/, ''));
</script>

{#if slug}
	<p class="photo_credit">
		<a
			href="https://www.instagram.com/{slug}/"
			target="_blank"
			rel="noopener noreferrer"
		>{display}</a>
	</p>
{/if}

<style>
	.photo_credit {
		margin: 0.3rem 0 0;
		padding: 0 0.15rem;
		font-family: var(--font-body);
		font-size: clamp(0.48rem, 1.35vw, 0.56rem);
		letter-spacing: 0.04em;
		line-height: 1.35;
		color: var(--text-3);
		text-align: left;
	}

	.photo_credit a {
		color: inherit;
		text-decoration: none;
		opacity: 0.88;
	}

	.photo_credit a:hover {
		color: var(--accent-rose);
		opacity: 1;
	}
</style>
