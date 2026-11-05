import Link from "next/link";

import { site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="brand" aria-label={`${site.name} — home`}>
              <span className="brand-mark" aria-hidden="true" />
              <span className="brand-name">{site.name}</span>
            </Link>
            <p>
              {site.tagline}. A public working file by an independent product
              engineer.
            </p>
          </div>

          <nav className="footer-column" aria-label="Footer">
            <p className="footer-label">Sitemap</p>
            <ul className="footer-links">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-column">
            <p className="footer-label">Elsewhere</p>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${site.email}`}>Email</a>
              </li>
              <li>
                <a
                  href={site.postsApiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source API
                </a>
              </li>
              <li>
                <a href="#top">Back to top</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-wordmark" aria-hidden="true">
          {site.name}
        </p>

        <div className="footer-bottom">
          <p>
            © {site.year} {site.name}. Notes are works in progress.
          </p>
          <p>Set in Bricolage Grotesque, Instrument Sans &amp; IBM Plex Mono.</p>
        </div>
      </div>
    </footer>
  );
}
