import { useState } from "react";
import type { FormEvent } from "react";

interface PostFormProps {
  onCreate: (post: { title: string; body: string }) => Promise<boolean>;
  creating: boolean;
  error: string | null;
}

const PostForm = ({ onCreate, creating, error }: PostFormProps) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title.trim() || !body.trim()) return;

    const success = await onCreate({
      title,
      body,
    });

    if (success) {
      setTitle("");
      setBody("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8"
    >
      <h2 className="text-xl font-bold mb-5">
        Create New Post
      </h2>

      <div className="flex flex-col gap-2 mb-4">
        <label className="font-medium">Title</label>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter post title..."
          required
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <label className="font-medium">Body</label>

        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Enter post body..."
          required
          rows={4}
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {error && (
        <p className="text-red-600 mb-4">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={creating || !title.trim() || !body.trim()}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
      >
        {creating ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
};

export default PostForm;