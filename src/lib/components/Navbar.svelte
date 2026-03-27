<nav class="nav_rail" aria-label="Main navigation">
	<a class="rail_brand" href="#home">Michela</a>

	<input id="nav_toggle" class="nav_toggle" type="checkbox" aria-label="Toggle navigation menu" />
	<label for="nav_toggle" class="hamburger" aria-hidden="true">
		<span></span>
		<span></span>
		<span></span>
	</label>

	<ul class="rail_links">
		<li><a href="#home">Home</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#gallery">Gallery</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>

	<ul class="rail_top">
		<li><a href="#gallery">Gallery</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#portraits">Portraits</a></li>
		<li><a href="#contact">Contact</a></li>
	</ul>
</nav>

<style>
	.nav_rail {
		position: fixed;
		inset: 0;
		pointer-events: none;
		z-index: 50;
	}

	.nav_rail :is(a, label, input) {
		pointer-events: auto;
	}

	.rail_brand {
		position: absolute;
		top: 1.35rem;
		right: 1.5rem;
		left: auto;
		max-width: min(14rem, 42vw);
		text-align: right;
		font-family: var(--font-body);
		font-weight: 600;
		font-size: 0.56rem;
		letter-spacing: 0.3rem;
		text-transform: uppercase;
		color: rgba(232, 180, 194, 0.92);
		text-decoration: none;
		opacity: 1;
	}

	.rail_links {
		position: absolute;
		right: 1.1rem;
		left: auto;
		top: 50%;
		transform: translateY(-50%);
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 2.1rem;
		align-items: center;
	}

	.rail_links a {
		display: block;
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		text-decoration: none;
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 0.64rem;
		letter-spacing: 0.16rem;
		text-transform: uppercase;
		color: var(--text-2);
		transition: color 200ms ease;
	}

	.rail_links a:hover {
		color: var(--accent-rose);
	}

	.rail_top {
		position: absolute;
		top: 1.25rem;
		left: 1.5rem;
		right: auto;
		display: flex;
		gap: 1.25rem;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.rail_top a {
		text-decoration: none;
		font-family: var(--font-body);
		font-weight: 500;
		font-size: 0.72rem;
		color: var(--text-2);
		transition: color 200ms ease;
	}

	.rail_top a:hover {
		color: var(--accent-rose);
	}

	.nav_toggle,
	.hamburger {
		display: none;
	}

	@media (max-width: 880px) {
		.rail_links {
			display: none;
		}

		.rail_brand {
			top: 1rem;
			right: 1rem;
			left: auto;
			max-width: min(12rem, 55vw);
		}

		.hamburger {
			pointer-events: auto;
			position: fixed;
			top: 1rem;
			left: 50%;
			transform: translateX(-50%);
			display: inline-flex;
			flex-direction: column;
			gap: 5px;
			padding: 10px;
			z-index: 55;
			background: rgba(28, 26, 24, 0.75);
			backdrop-filter: blur(10px);
			border: 1px solid rgba(255, 255, 255, 0.12);
			border-radius: 10px;
		}

		.hamburger span {
			width: 22px;
			height: 2px;
			background: rgba(245, 238, 240, 0.92);
		}

		.rail_top {
			display: none;
		}

		.nav_toggle:checked ~ .rail_links {
			display: flex;
			position: fixed;
			left: 0;
			right: 0;
			bottom: 0;
			top: auto;
			transform: none;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			gap: 0.5rem;
			padding: 1rem;
			background: rgba(20, 18, 16, 0.96);
			border-top: 1px solid rgba(255, 255, 255, 0.1);
			writing-mode: horizontal-tb;
		}

		.nav_toggle:checked ~ .rail_links a {
			writing-mode: horizontal-tb;
			transform: none;
			padding: 0.5rem 0.75rem;
		}
	}
</style>
