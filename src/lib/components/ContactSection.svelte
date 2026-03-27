<section id="contact" class="contact_wrap">
	<div class="contact_card">
		<p class="label">Contact</p>
		<h2>Let us build the next frame together</h2>
		<p class="subtext">
			For lingerie, beauty, and fine-art collaborations—Berlin based, selective travel. Share your moodboard and we
			will shape something refined.
		</p>
		<div class="contact_grid">
			<div class="contact_primary">
				<span>Email</span>
				<p>
					<a class="contact_link" href="mailto:Michela.dadda99@gmail.com">Michela.dadda99@gmail.com</a>
				</p>
				<p class="fineprint">Thoughtful replies within a few days</p>
			</div>
			<div>
				<span>Social</span>
				<p>
					<a
						class="contact_link"
						href="https://www.instagram.com/michela.dadda?igsh=MTdiOG9lMmtucmttbw=="
						target="_blank"
						rel="noreferrer">Instagram</a>
				</p>
				<p class="fineprint">Fine art &amp; editorial updates</p>
			</div>
		</div>
	</div>
</section>

<style>
	.contact_wrap {
		padding: 3.5rem 0 2.4rem;
	}

	.contact_card {
		border-radius: 10px;
		padding: 1.5rem 1.4rem;
		border: 1px solid rgba(232, 180, 194, 0.14);
		background: linear-gradient(150deg, rgba(232, 180, 194, 0.06) 0%, rgba(6, 4, 5, 0.94) 42%, rgba(5, 4, 5, 0.98) 100%);
		backdrop-filter: blur(18px);
		box-shadow:
			0 24px 56px rgba(0, 0, 0, 0.55),
			inset 0 1px 0 rgba(255, 255, 255, 0.04);
	}

	.label {
		font-family: var(--font-body);
		text-transform: uppercase;
		letter-spacing: 0.21rem;
		font-size: 0.64rem;
		font-weight: 600;
		color: var(--accent-rose);
		margin: 0;
	}

	h2 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(1.45rem, 3.2vw, 2.2rem);
		letter-spacing: 0.02em;
		color: var(--text-1);
		margin: 0.45rem 0 0.55rem;
		line-height: 1.2;
	}

	.subtext {
		font-family: var(--font-body);
		color: var(--text-2);
		line-height: 1.68;
		margin: 0;
		font-size: 0.94rem;
		max-width: 52ch;
	}

	.contact_grid {
		margin-top: 1.35rem;
		display: grid;
		grid-template-columns: 1.2fr 0.8fr;
		gap: 1rem;
	}

	.contact_grid div {
		border: 1px solid rgba(232, 180, 194, 0.1);
		border-radius: 8px;
		padding: 1rem;
		background: rgba(8, 6, 7, 0.5);
	}

	.contact_primary {
		grid-column: 1;
	}

	.contact_grid span {
		font-family: var(--font-body);
		color: var(--accent-rose-deep);
		font-size: 0.72rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.contact_grid p {
		margin: 0.4rem 0 0;
		font-family: var(--font-body);
		color: var(--text-1);
	}

	.fineprint {
		font-family: var(--font-body);
		font-size: 0.71rem;
		color: var(--text-3);
		margin-top: 0.5rem;
	}

	.contact_link {
		font-family: var(--font-body);
		color: var(--accent-rose);
		text-decoration: none;
		border-bottom: 1px solid rgba(232, 180, 194, 0.4);
		padding-bottom: 2px;
		transition:
			color 200ms ease,
			border-color 200ms ease;
	}

	.contact_link:hover {
		color: var(--text-1);
		border-color: rgba(232, 180, 194, 0.7);
	}

	@media (max-width: 840px) {
		.contact_grid {
			grid-template-columns: 1fr;
		}
	}
</style>
