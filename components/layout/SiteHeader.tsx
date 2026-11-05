"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { site } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onResize = () => {
      if (window.innerWidth > 920) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} — home`}>
          <span className="brand-mark" aria-hidden="true" />
          <span className="brand-name">{site.name}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {site.nav.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? "nav-link is-active" : "nav-link"}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="nav-index" aria-hidden="true">
                      {item.index}
                    </span>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-side">
          <span className="availability">
            <span className="availability-dot" aria-hidden="true" />
            Open for select work
          </span>
          <Link href="/contact" className="header-cta">
            Start a project
          </Link>
        </div>

        <button
          type="button"
          className={open ? "menu-toggle is-open" : "menu-toggle"}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {open ? (
        <div id="site-menu" className="mobile-menu">
          <nav aria-label="Mobile">
            <ul>
              {site.nav.map((item) => {
                const active = isActivePath(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={
                        active ? "mobile-link is-active" : "mobile-link"
                      }
                      aria-current={active ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      <span className="nav-index" aria-hidden="true">
                        {item.index}
                      </span>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mobile-menu-foot">
            <span className="availability">
              <span className="availability-dot" aria-hidden="true" />
              Open for select work
            </span>
            <a className="mobile-menu-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className="mobile-menu-note">{site.location}</p>
          </div>
        </div>
      ) : null}
    </header>
  );
}
