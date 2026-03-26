<section id="contact" class="contact_wrap">
	<div class="contact_card">
		<p class="label">Contact</p>
		<h2>Let us build the next frame together.</h2>
		<p class="subtext">
			Open for fashion campaigns, editorials, and showroom work. Based in Berlin with travel across Germany and
			Europe.
		</p>
		<div class="contact_grid">
			<div>
				<span>Direct</span>
				<p><a class="contact_link" href="mailto:hello@michele.com">hello@michele.com</a></p>
				<p class="fineprint">Replies within two business days</p>
			</div>
			<div>
				<span>Agency</span>
				<p>Berlin Model Management</p>
				<p class="fineprint">Mitte · 10115 Berlin, Germany</p>
			</div>
			<div>
				<span>Social</span>
				<p>
					<a
						class="contact_link"
						href="https://www.instagram.com/michela.dadda?igsh=MTdiOG9lMmtucmttbw=="
						target="_blank"
						rel="noreferrer">Instagram</a>
					·
					<a class="contact_link" href="https://www.linkedin.com" target="_blank" rel="noreferrer"
						>LinkedIn</a>
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.contact_wrap {
		padding: 3.5rem 0 2.4rem;
	}

	.contact_card {
		border-radius: 8px;
		padding: 1.35rem;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: linear-gradient(145deg, rgba(16, 16, 16, 0.97) 0%, rgba(5, 5, 5, 0.99) 100%);
		backdrop-filter: blur(16px);
		box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
	}

	.label {
		font-family: var(--font-body);
		text-transform: uppercase;
		letter-spacing: 0.21rem;
		font-size: 0.64rem;
		font-weight: 600;
		color: var(--text-gold);
		margin: 0;
	}

	h2 {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: clamp(1.45rem, 3.2vw, 2.25rem);
		letter-spacing: -0.01em;
		color: var(--text-1);
		margin: 0.4rem 0 0.5rem;
	}

	.subtext {
		font-family: var(--font-body);
		color: var(--text-2);
		line-height: 1.62;
		margin: 0;
	}

	.contact_grid {
		margin-top: 1.2rem;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.8rem;
	}

	.contact_grid div {
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 6px;
		padding: 0.85rem;
		background: rgba(255, 255, 255, 0.03);
	}

	.contact_grid span {
		font-family: var(--font-body);
		color: var(--text-gold);
		font-size: 0.76rem;
		font-weight: 500;
	}

	.contact_grid p {
		margin: 0.35rem 0 0;
		font-family: var(--font-body);
		color: var(--text-1);
	}

	.fineprint {
		font-family: var(--font-body);
		font-size: 0.71rem;
		color: var(--text-3);
	}

	.contact_link {
		font-family: var(--font-body);
		color: var(--text-gold);
		text-decoration: none;
		border-bottom: 1px solid rgba(201, 169, 98, 0.45);
		padding-bottom: 2px;
		transition: color 180ms ease, border-color 180ms ease;
	}

	.contact_link:hover {
		color: var(--text-1);
		border-color: rgba(250, 248, 243, 0.55);
	}

	@media (max-width: 840px) {
		.contact_grid {
			grid-template-columns: 1fr;
		}
	}
</style>
