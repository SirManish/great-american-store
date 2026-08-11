# Great American Store v2 deployment

1. Create GitHub repository and push this folder.
2. Connect repository to Cloudflare Pages.
3. Build: `npm run build`; output: `out`.
4. Test the pages.dev address.
5. Add `greatamericanstore.in` in Cloudflare Pages custom domains.
6. Follow Cloudflare's exact DNS instructions in GoDaddy.
7. Create Cloudflare D1 database.
8. Set database ID in worker/wrangler.toml.
9. Apply db/schema.sql.
10. Deploy Worker.
11. Connect frontend API base URL.
12. Replace placeholder WhatsApp/email.
13. Add real catalog/images/prices/stock.
14. Implement authenticated admin before exposing product/order management.
15. Connect payment gateway and verify payments server-side.
16. Connect shipping provider.
17. Test COD, online payment, failed payment, cancellation, refund and mobile checkout.
18. Publish policies and GST/invoice details as applicable.
