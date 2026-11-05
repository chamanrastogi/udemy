import { cacheLife, cacheTag } from "next/cache";

import { env } from "@/lib/env";
import type { Post } from "@/types/post";

/**
 * Cached at the data level so the posts index and the home page share
 * one fetch, and so the result can join the static shell.
 */
export async function getPosts(): Promise<Post[]> {
  "use cache";
  cacheLife("hours");
  cacheTag("posts");

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
