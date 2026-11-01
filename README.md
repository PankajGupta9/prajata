# Prajata Website

## Development

```sh
npm install
npm run dev
```

## Production launch

1. Copy `.env.example` to `.env.production` and set `VITE_CONTACT_FORM_ENDPOINT` to an authenticated, privacy-reviewed form endpoint.
2. Review all final clinic contact information and medical claims before publishing.
3. Add the production domain to SEO metadata, `robots.txt`, and a generated `sitemap.xml`.
4. Verify HTTPS, DNS, redirects, analytics consent, privacy policy, and secure access to form submissions.
5. Run `npm run lint` and `npm run build`.
