import type { Post } from "../types/post-temp";

const API_URL = "https://jsonplaceholder.typicode.com/posts?_limit=10";
export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: Post[] = await response.json();

  return data;
};

export const createPost = async (
  post: Pick<Post, "title" | "body">
): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 1,
      title: post.title,
      body: post.body,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create post");
  }

  const data: Post = await response.json();

  return data;
};