import type { Metadata } from "next";

import { ContactCta } from "@/components/marketing/ContactCta";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Fieldwork is the practice of an independent product engineer working between interface design, front-end architecture, and the notes that hold a build together.",
};

export default function AboutPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <div className="page-meta">
            <span>About / The practice</span>
            <span>{site.location}</span>
          </div>

          <h1 className="page-title">
            A practice
            <br />
            of noticing.
          </h1>

          <div className="page-hero-foot">
            <p className="page-lede">
              I&apos;m an independent product engineer. I design and build
              interfaces that explain themselves — then write down what I
              learned along the way.
            </p>
            <ArrowLink href="/contact">Start a conversation</ArrowLink>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="container about-layout">
          <aside className="about-aside">
            <p className="footer-label">Profile</p>
            <p className="about-aside-title">Independent product engineer</p>
            <p>
              Interfaces, systems, and the words around them. Working remotely
              from {site.location}.
            </p>
          </aside>

          <div className="prose">
            <p>
              I work at the seam between design and engineering. That usually
              means shaping a rough idea into a working interface, tightening
              the type and the state model at the same time, and leaving enough
              documentation that the next person can move without guessing.
            </p>
            <p>
              Most of my work starts with a question that will not sit still:
              what is this thing actually for? I would rather spend an afternoon
              removing a feature than a week polishing one nobody needs. The
              best interfaces feel inevitable in hindsight — as if there was
              never another sensible way to arrange the pieces.
            </p>

            <blockquote className="pull-quote">
              Good interfaces do not announce themselves. They just make the
              next step obvious.
            </blockquote>

            <p>
              This site is the notebook. It holds the notes I would otherwise
              lose: patterns that worked, decisions that did not, and small
              observations from the build. Some entries are technical. Some are
              about taste. All of them are written while the work is still
              warm.
            </p>

            <div className="currently">
              <p className="footer-label">Currently</p>
              <dl className="detail-list">
                <div>
                  <dt>Building</dt>
                  <dd>This notebook</dd>
                </div>
                <div>
                  <dt>Reading</dt>
                  <dd>The Craftsman, Richard Sennett</dd>
                </div>
                <div>
                  <dt>Based</dt>
                  <dd>{site.location}</dd>
                </div>
                <div>
                  <dt>Open to</dt>
                  <dd>Select freelance work</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--rule">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-index">01</span> Field kit
              </p>
              <h2 className="section-title">
                Tools of
                <br />
                the trade.
              </h2>
            </div>

            <div className="section-aside">
              <p className="section-note">
                A compact set of capabilities, chosen because they tend to
                matter on the days that count.
              </p>
            </div>
          </div>

          <div className="about-grid">
            <div>
              <p className="footer-label">Capabilities</p>
              <dl className="kit-list">
                <div>
                  <dt>Interface design</dt>
                  <dd>Product UI, interaction, visual systems</dd>
                </div>
                <div>
                  <dt>Front-end architecture</dt>
                  <dd>Next.js, React, TypeScript</dd>
                </div>
                <div>
                  <dt>Design systems</dt>
                  <dd>Tokens, components, documentation</dd>
                </div>
                <div>
                  <dt>Prototyping</dt>
                  <dd>Quick demos, feasibility, direction</dd>
                </div>
                <div>
                  <dt>Technical writing</dt>
                  <dd>Notes, specs, and clean handover</dd>
                </div>
              </dl>
            </div>

            <div>
              <p className="footer-label">How I work</p>
              <ol className="work-list">
                <li>
                  <span className="work-index" aria-hidden="true">
                    01
                  </span>
                  <div>
                    <h3>Frame the problem</h3>
                    <p>
                      Write the brief, name the constraint, and agree on what
                      done actually means.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="work-index" aria-hidden="true">
                    02
                  </span>
                  <div>
                    <h3>Build the honest version</h3>
                    <p>
                      Real content, real states, real edge cases. No decoration
                      on a feature that has not earned it.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="work-index" aria-hidden="true">
                    03
                  </span>
                  <div>
                    <h3>Leave a trail</h3>
                    <p>
                      Notes, decisions, and a handover that does not need me in
                      the room.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <ContactCta
        label="Next step"
        title={
          <>
            Let&apos;s make it
            <br />
            legible.
          </>
        }
      />
    </>
  );
}
