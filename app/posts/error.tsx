"use client";

type PostsErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function PostsError({ reset }: PostsErrorProps) {
  return (
    <div className="status-page">
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow-index">Error</span> Posts
        </p>
        <h1>The notebook didn&apos;t open.</h1>
        <p className="status-copy">
          The posts feed could not be reached. Check the API URL in your
          environment file, then try again.
        </p>
        <button type="button" className="button button--solid" onClick={reset}>
          Try again
          <span aria-hidden="true">↻</span>
        </button>
      </div>
    </div>
  );
}
