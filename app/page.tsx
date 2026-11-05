import Link from "next/link";

import { ContactCta } from "@/components/marketing/ContactCta";
import { PostList } from "@/components/notes/PostList";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { getLatestPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export default async function HomePage() {
  const latestPosts = await getLatestPosts(3);

  return (
    <>
      <section className="hero">
        <div className="hero-field" aria-hidden="true" />

        <div className="container">
          <div className="hero-meta">
            <span>{site.name} / Notebook 04</span>
            <span className="hero-meta-mid">Public working file</span>
            <span className="hero-meta-status">
              <span className="availability-dot" aria-hidden="true" />
              Open for select work
            </span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                Independent product engineer — {site.location}
              </p>

              <h1 className="hero-title">
                Notes from
                <br />
                the <span className="accent">build</span>.
              </h1>

              <p className="hero-lede">
                A public notebook on interfaces, systems, and the small
                decisions that make software feel considered. Written while
                making, not after.
              </p>

              <div className="hero-actions">
                <Link href="/posts" className="button button--solid">
                  Read the posts
                  <span aria-hidden="true">→</span>
                </Link>
                <ArrowLink href="/about">The practice</ArrowLink>
              </div>

              <p className="hero-footnote">
                No newsletter. No noise. Just the work.
              </p>
            </div>

            <aside className="specimen" aria-label="Current working file">
              <div className="specimen-head">
                <span>Specimen / 04</span>
                <span className="specimen-dot" aria-hidden="true" />
              </div>

              <dl className="specimen-rows">
                <div className="specimen-row">
                  <dt>Status</dt>
                  <dd>Independent</dd>
                </div>
                <div className="specimen-row">
                  <dt>Focus</dt>
                  <dd>Interfaces &amp; systems</dd>
                </div>
                <div className="specimen-row">
                  <dt>Based</dt>
                  <dd>{site.location}</dd>
                </div>
                <div className="specimen-row">
                  <dt>Building</dt>
                  <dd>This notebook</dd>
                </div>
                <div className="specimen-row">
                  <dt>Contact</dt>
                  <dd>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </dd>
                </div>
              </dl>

              <div className="specimen-foot">
                <span>File no. {site.year}—04</span>
                <span className="barcode" aria-hidden="true" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--rule">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-index">01</span> Latest entries
              </p>
              <h2 className="section-title">
                Fresh from
                <br />
                the notebook.
              </h2>
            </div>

            <div className="section-aside">
              <p className="section-note">
                Short records of what I&apos;m building, what broke, and what
                I&apos;d do differently next time.
              </p>
              <ArrowLink href="/posts">All posts</ArrowLink>
            </div>
          </div>

          <PostList posts={latestPosts} compact />
        </div>
      </section>

      <section className="section section--rule">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-index">02</span> Approach
              </p>
              <h2 className="section-title">
                Clarity first.
                <br />
                Then speed.
              </h2>
            </div>

            <div className="section-aside">
              <p className="section-note">
                The process is deliberately small: understand the constraint,
                build the honest version, and leave enough notes that the next
                person does not have to guess.
              </p>
            </div>
          </div>

          <div className="principles">
            <article className="principle">
              <p className="principle-label">Craft</p>
              <h3>Clarity is the feature</h3>
              <p>
                If the next step is not obvious, the interface is not finished.
                The state model comes before the decoration.
              </p>
            </article>

            <article className="principle">
              <p className="principle-label">Process</p>
              <h3>Ship the smallest honest version</h3>
              <p>
                Real content, real edge cases, no polish on a feature that has
                not earned it. Momentum beats a perfect plan.
              </p>
            </article>

            <article className="principle">
              <p className="principle-label">Record</p>
              <h3>Leave a trail</h3>
              <p>
                Every build produces notes: what changed, why it changed, and
                what I would try if I had another afternoon.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
