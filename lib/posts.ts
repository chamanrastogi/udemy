import { env } from "@/lib/env";
import type { Post } from "@/types/post";

/**
 * Both pages that call this are statically generated at build time, so the
 * request runs once per export and the markup is baked into the output.
 * GitHub Pages has no server to revalidate, so there is no runtime cache
 * layer to configure here.
 */
export async function getPosts(): Promise<Post[]> {
  const response = await fetch(env.postsApiUrl);

  if (!response.ok) {
    throw new Error(`Could not load posts (${response.status})`);
  }

  return (await response.json()) as Post[];
}

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  const posts = await getPosts();
  return posts.slice(0, limit);
}

export function formatPostId(id: number) {
  return String(id).padStart(3, "0");
}

export function sentenceCase(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
