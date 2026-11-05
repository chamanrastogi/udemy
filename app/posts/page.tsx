import type { Metadata } from "next";

import { PostList } from "@/components/notes/PostList";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { getPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Every entry in the Fieldwork notebook — short records of interfaces, systems, and decisions made while building.",
};

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <header className="page-hero">
        <div className="container">
          <div className="page-meta">
            <span>Index / Field notes</span>
            <span>{String(posts.length).padStart(3, "0")} entries</span>
          </div>

          <h1 className="page-title">
            Every note,
            <br />
            in order.
          </h1>

          <div className="page-hero-foot">
            <p className="page-lede">
              A running index of what I have been building. Longer than a
              changelog, shorter than an essay — just enough to remember the
              decision next time.
            </p>

            <a
              className="source-link"
              href={site.postsApiUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source: JSONPlaceholder <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <section className="section section--flush">
        <div className="container">
          <PostList posts={posts} headingLevel={2} />

          <div className="page-back">
            <ArrowLink href="/">Back to the notebook</ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
