# Plantora E-commerce Website

A complete static, GitHub Pages-compatible Plantora e-commerce website using the supplied Plantora branding, product images, item numbers, sizes and visible prices.

## Main files
- `index.html` — homepage
- `shop.html` — searchable/filterable product catalog
- `product.html?id=SKU` — dynamic product detail page
- `cart.html` — local cart
- `checkout.html` — customer details + WhatsApp order submission
- `about.html` — brand overview
- `profile.html` — embedded 10-page Plantora company profile
- `contact.html` — contact/social page
- `assets/css/style.css` — all site styling (relative path, works on GitHub Pages)
- `assets/js/` — frontend functionality
- `data/products.json` — JSON product database export
- `database/plantora.db` — SQLite source database
- `database/schema.sql` — database schema
- `profile/Plantora_Company_Profile_2026.pdf` — company profile PDF

## GitHub Pages deployment
1. Create a GitHub repository.
2. Upload **the contents of this folder** to the repository root. `index.html` must stay in the root.
3. In GitHub open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder, then Save.
6. The CSS and JavaScript use relative URLs, so they load correctly from GitHub Pages without changing paths.

## How the store works
The site is intentionally deployment-ready without server credentials:
- Products load from `assets/js/products.js` (same data is also in `data/products.json`).
- Cart and latest order are stored in the customer's browser using `localStorage`.
- Checkout creates a complete WhatsApp order message and opens it to Plantora at `+966 54 887 2490`.
- Products whose supplied image did not show a price are marked **Price on request** rather than inventing a price.
- The included SQLite database is a source database for future server-side migration. GitHub Pages itself cannot write to SQLite because it is static hosting.

## To add real online payments / centralized order storage
Connect the frontend to Supabase, Firebase, Shopify, WooCommerce, or another backend/payment provider. Merchant/payment credentials are required for Mada, Apple Pay, Visa/Mastercard processing and should never be committed to a public GitHub repository.
