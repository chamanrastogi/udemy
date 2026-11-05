import { formatPostId, sentenceCase } from "@/lib/posts";
import type { Post } from "@/types/post";

type PostListProps = {
  posts: Post[];
  compact?: boolean;
  headingLevel?: 2 | 3;
};

export function PostList({
  posts,
  compact = false,
  headingLevel = 3,
}: PostListProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <ol className={compact ? "post-list post-list--compact" : "post-list"}>
      {posts.map((post) => (
        <li className="post-row" key={post.id} id={`post-${post.id}`}>
          <span className="post-id" aria-hidden="true">
            {formatPostId(post.id)}
          </span>

          <div className="post-main">
            <Heading className="post-title">
              {sentenceCase(post.title)}
            </Heading>
            <p className="post-body">{post.body}</p>
          </div>

          <div className="post-meta">
            <span>User {String(post.userId).padStart(2, "0")}</span>
            <span className="post-mark" aria-hidden="true">
              /
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
