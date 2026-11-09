import { useEffect, useState } from "react";
import { getPosts, createPost } from "../services/postService";
import type { Post } from "../types/post-temp";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getPosts();

        setPosts(data);
      } catch (err) {
        if (controller.signal.aborted) return;

        setError(
          err instanceof Error ? err.message : "Something went wrong"
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [retryCount]);

  const retry = () => {
    setRetryCount((prev) => prev + 1);
  };

  const addPost = async (
  post: Pick<Post, "title" | "body">
): Promise<boolean> => {
  try {
    setCreating(true);
    setCreateError(null);

    const newPost = await createPost(post);

    const postWithUniqueId = {
      ...newPost,
      id: Date.now(),
    };

    setPosts((prevPosts) => [postWithUniqueId, ...prevPosts]);

    return true;
  } catch (err) {
    setCreateError(
      err instanceof Error ? err.message : "Failed to create post"
    );

    return false;
  } finally {
    setCreating(false);
  }
};

  return {
  posts,
  loading,
  error,
  retry,
  addPost,
  creating,
  createError,
};
};