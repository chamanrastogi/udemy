import type { ReactNode } from "react";

import { contactHref, site } from "@/lib/site";

type ContactCtaProps = {
  index?: string;
  label?: string;
  title?: ReactNode;
  copy?: string;
};

export function ContactCta({
  index = "03",
  label = "Open channel",
  title,
  copy = "I take on a small number of freelance projects at a time — usually product interfaces, design systems, or a front end that needs a steadier hand.",
}: ContactCtaProps) {
  return (
    <section className="cta-band">
      <div className="container">
        <p className="eyebrow eyebrow--invert">
          <span className="eyebrow-index">{index}</span> {label}
        </p>

        <div className="cta-layout">
          <h2 className="cta-title">
            {title ?? (
              <>
                Have a knot
                <br />
                to untangle?
              </>
            )}
          </h2>

          <div className="cta-side">
            <p className="cta-copy">{copy}</p>
            <a className="email-link" href={contactHref}>
              {site.email}
            </a>
            <p className="cta-note">Replies within two working days.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
