# Great American Store v2 — ecommerce starter

This version expands the original starter with search, filtering/sorting, stock display, product details/features, cart quantity/removal, checkout/COD flow, customer account placeholder, admin dashboard placeholder, coupon schema, customers schema and a Worker/D1 backend foundation.

## Important
Sample product data/prices and placeholder contact details are included only so the site works as a demo. Replace them before launch.

## Run
npm install
npm run dev

## Build
npm run build

## Deploy frontend
Connect the GitHub repository to Cloudflare Pages. Build command: `npm run build`; output directory: `out`.

## Deploy backend
Create Cloudflare D1, update `worker/wrangler.toml`, then:
`npx wrangler d1 execute great-american-store --remote --file=../db/schema.sql`
`npx wrangler deploy`

Set `ADMIN_KEY` as a Worker secret for protected admin API access.

## Production work still required
- Real product photos and complete catalog
- Real WhatsApp/email
- Secure admin login UI
- Connect frontend checkout to Worker API
- Payment gateway (e.g. Razorpay) with server-side signature verification
- Shipping integration/tracking
- Real customer authentication
- Transactional email/SMS/WhatsApp
- Legal pages: privacy, terms, shipping, returns/refunds
- Tax/GST invoice handling as applicable
- Security/rate limiting, logging and backups
