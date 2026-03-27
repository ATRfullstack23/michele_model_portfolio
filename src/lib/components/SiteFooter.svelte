<footer class="footer_wrap">
	<div class="footer_grid">
		<div>
			<p class="footer_heading">Michela</p>
			<p class="footer_tag">Sensual fine art model · Berlin</p>
		</div>
		<div>
			<p class="footer_heading">Email</p>
			<p>
				<a class="footer_link" href="mailto:Michela.dadda99@gmail.com">Michela.dadda99@gmail.com</a>
			</p>
		</div>
		<div>
			<p class="footer_heading">Social</p>
			<p>
				<a
					class="footer_link"
					href="https://www.instagram.com/michela.dadda?igsh=MTdiOG9lMmtucmttbw=="
					target="_blank"
					rel="noreferrer">Instagram</a>
			</p>
		</div>
	</div>
	<div class="footer_rule"></div>
	<p class="copyright">© 2026 Michela. All rights reserved.</p>
</footer>

<style>
	.footer_wrap {
		padding: 1.5rem 0 2.4rem;
		border-top: 1px solid rgba(232, 180, 194, 0.1);
		background: #030202;
		margin-left: calc(50% - 50vw);
		margin-right: calc(50% - 50vw);
		width: 100vw;
		padding-left: clamp(1rem, 4vw, 4.5rem);
		padding-right: clamp(1rem, 4vw, 4.5rem);
		padding-top: 2rem;
	}

	.footer_grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1rem;
		max-width: min(1080px, 100%);
		margin: 0 auto;
	}

	.footer_heading {
		margin: 0 0 0.35rem;
		font-family: var(--font-body);
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.16rem;
		font-size: 0.6rem;
		color: var(--accent-rose);
	}

	.footer_tag {
		margin: 0;
		font-family: var(--font-body);
		color: var(--text-2);
		line-height: 1.55;
		font-size: 0.82rem;
	}

	.footer_grid p {
		margin: 0;
		font-family: var(--font-body);
		color: var(--text-1);
		line-height: 1.55;
		font-size: 0.85rem;
	}

	.footer_link {
		font-family: var(--font-body);
		color: var(--accent-rose);
		text-decoration: none;
		border-bottom: 1px solid rgba(232, 180, 194, 0.4);
		padding-bottom: 2px;
		transition:
			color 180ms ease,
			border-color 180ms ease;
	}

	.footer_link:hover {
		color: var(--text-1);
		border-color: rgba(232, 180, 194, 0.65);
	}

	.footer_rule {
		max-width: min(1080px, 100%);
		margin: 1.2rem auto 0;
		height: 1px;
		background: linear-gradient(
			90deg,
			transparent,
			rgba(232, 180, 194, 0.2),
			transparent
		);
	}

	.copyright {
		margin: 1.2rem 0 0;
		text-align: center;
		font-family: var(--font-body);
		color: var(--text-3);
		font-size: 0.76rem;
	}

	@media (max-width: 720px) {
		.footer_grid {
			grid-template-columns: 1fr;
		}
	}
</style>
