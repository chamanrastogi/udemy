export default function PostsLoading() {
  return (
    <div className="container loading-page" aria-label="Loading posts">
      <div className="loading-meta">
        <span className="skeleton skeleton-short" />
        <span className="skeleton skeleton-short" />
      </div>
      <div className="skeleton skeleton-title" />

      <ol className="post-list">
        {Array.from({ length: 6 }).map((_, index) => (
          <li className="post-row" key={index}>
            <span className="skeleton skeleton-id" />
            <div className="post-main">
              <span className="skeleton skeleton-line" />
              <span className="skeleton skeleton-line skeleton-line--short" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
