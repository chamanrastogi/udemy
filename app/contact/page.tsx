import type { Metadata } from "next";

import { ArrowLink } from "@/components/ui/ArrowLink";
import { contactHref, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about a product interface, design system, or front end that needs a steadier hand.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-hero contact-hero">
        <div className="container">
          <div className="page-meta">
            <span>Contact / Open channel</span>
            <span>Replies in two working days</span>
          </div>

          <h1 className="page-title">
            Let&apos;s compare
            <br />
            notes.
          </h1>

          <div className="page-hero-foot">
            <p className="page-lede">
              Tell me what you are building, where it is stuck, and what a good
              outcome looks like. A short note is enough to start.
            </p>
            <span className="availability">
              <span className="availability-dot" aria-hidden="true" />
              Open for select work
            </span>
          </div>

          <a className="contact-email" href={contactHref}>
            {site.email}
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <section className="section section--flush">
        <div className="container contact-grid">
          <div className="info-block">
            <p className="eyebrow">
              <span className="eyebrow-index">01</span> Good reasons to write
            </p>
            <h2>A project with a real constraint.</h2>

            <ul className="rule-list">
              <li>
                <span className="rule-index" aria-hidden="true">
                  01
                </span>
                <div>
                  <h3>A product that needs shaping</h3>
                  <p>
                    An early idea that needs a working interface, a point of
                    view, and a faster way to learn what it should be.
                  </p>
                </div>
              </li>
              <li>
                <span className="rule-index" aria-hidden="true">
                  02
                </span>
                <div>
                  <h3>An interface that needs untangling</h3>
                  <p>
                    Something real is shipping, but the states, the hierarchy,
                    or the front end has become harder to reason about.
                  </p>
                </div>
              </li>
              <li>
                <span className="rule-index" aria-hidden="true">
                  03
                </span>
                <div>
                  <h3>A team that needs a second pair of eyes</h3>
                  <p>
                    A design review, a technical audit, or a short engagement
                    to help the team see the shape of the problem.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="info-block">
            <p className="eyebrow">
              <span className="eyebrow-index">02</span> Practicalities
            </p>
            <h2>Small, clear engagements.</h2>

            <dl className="detail-list">
              <div>
                <dt>Based</dt>
                <dd>{site.location} — remote by default</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>Select freelance work</dd>
              </div>
              <div>
                <dt>Response</dt>
                <dd>Within two working days</dd>
              </div>
              <div>
                <dt>Best first note</dt>
                <dd>
                  A sentence on the problem, a link if there is one, and the
                  deadline you are working toward.
                </dd>
              </div>
            </dl>

            <div className="contact-actions">
              <a className="button button--solid" href={contactHref}>
                Send an email
                <span aria-hidden="true">→</span>
              </a>
              <ArrowLink href="/about">About the practice</ArrowLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
