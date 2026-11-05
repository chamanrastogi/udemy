import Link from "next/link";

export default function NotFound() {
  return (
    <div className="status-page">
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow-index">404</span> Page not found
        </p>
        <h1>This page isn&apos;t in the notebook.</h1>
        <p className="status-copy">
          The link may have moved, or the note may still be a draft. The index
          is the best place to pick up the trail.
        </p>
        <Link href="/posts" className="button button--solid">
          Browse the posts
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
