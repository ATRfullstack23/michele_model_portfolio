/** Shared strings for title, Open Graph, Twitter — keep in sync everywhere */
export const site_title = 'Michela | Sensual fine art model · Berlin';
export const site_description =
	'Michela — Italian sensual fine art model based in Berlin. Lingerie, beauty, and intimate editorial frames.';
/** Open Graph / Twitter card title + blurb (link previews) */
export const og_title = 'Michela Dadda Portfolio';
export const og_description = 'Elegant model portfolio';
/**
 * When PUBLIC_SITE_URL is unset, crawlers still need the **canonical** HTTPS host for og:image
 * (must match the URL people paste). Set PUBLIC_SITE_URL on Vercel if you use a custom domain.
 */
export const site_public_origin_default = 'https://michele-model-portfolio.vercel.app';
/** File under static/ — JPG/PNG work best for WhatsApp / social link previews */
export const share_image_path = '/meta.jpeg';
export const share_image_type = 'image/jpeg';
/** From static/meta.jpeg — helps Facebook’s scraper */
export const share_image_width = 810;
export const share_image_height = 1080;
