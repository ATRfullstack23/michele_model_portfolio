<script>
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let show_scroll_top = $state(false);

	function update_visibility() {
		if (typeof window === 'undefined') return;
		const scroll_y = window.scrollY;
		const contact_el = document.getElementById('contact');
		let near_or_past_contact = false;
		if (contact_el) {
			const rect = contact_el.getBoundingClientRect();
			near_or_past_contact = rect.top < window.innerHeight * 0.92;
		}
		const scrolled_far = scroll_y > window.innerHeight * 0.45;
		show_scroll_top = scrolled_far && near_or_past_contact;
	}

	function scroll_to_top() {
		const home = document.getElementById('home');
		if (home) home.scrollIntoView({ behavior: 'smooth' });
		else window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		update_visibility();
		window.addEventListener('scroll', update_visibility, { passive: true });
		window.addEventListener('resize', update_visibility, { passive: true });
		return () => {
			window.removeEventListener('scroll', update_visibility);
			window.removeEventListener('resize', update_visibility);
		};
	});
</script>

{#if show_scroll_top}
	<button
		type="button"
		class="scroll_top_btn"
		onclick={scroll_to_top}
		aria-label="Back to top"
		transition:fly={{ y: 32, duration: 340, easing: cubicOut }}
	>
		<span class="scroll_top_icon" aria-hidden="true">↑</span>
		<span class="scroll_top_label">Top</span>
	</button>
{/if}

<style>
	.scroll_top_btn {
		position: fixed;
		right: clamp(0.75rem, 3vw, 1.35rem);
		bottom: clamp(0.75rem, 4vh, 1.35rem);
		z-index: 45;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.15rem;
		padding: 0.55rem 0.65rem 0.5rem;
		border-radius: 10px;
		border: 1px solid rgba(232, 180, 194, 0.35);
		background: rgba(10, 7, 9, 0.88);
		backdrop-filter: blur(12px);
		color: var(--text-1);
		box-shadow:
			0 12px 32px rgba(0, 0, 0, 0.45),
			0 0 0 1px rgba(232, 180, 194, 0.06);
		font-family: var(--font-body);
		transition:
			transform 200ms ease,
			border-color 200ms ease,
			box-shadow 200ms ease,
			background 200ms ease;
	}

	.scroll_top_btn:hover {
		transform: translateY(-3px);
		border-color: rgba(232, 180, 194, 0.55);
		background: rgba(24, 14, 18, 0.92);
		box-shadow:
			0 16px 40px rgba(0, 0, 0, 0.5),
			0 0 28px rgba(232, 180, 194, 0.15);
	}

	.scroll_top_btn:focus-visible {
		outline: 2px solid var(--accent-rose);
		outline-offset: 3px;
	}

	.scroll_top_icon {
		font-size: 1.05rem;
		line-height: 1;
		color: var(--accent-rose);
		font-weight: 600;
	}

	.scroll_top_label {
		font-size: 0.52rem;
		font-weight: 600;
		letter-spacing: 0.18rem;
		text-transform: uppercase;
		color: var(--text-2);
	}

	@media (max-width: 880px) {
		.scroll_top_btn {
			bottom: clamp(4.5rem, 14vh, 6rem);
		}
	}
</style>
