import type { Post } from "../types/post-temp";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
      <span className="text-sm text-gray-400">
        Post #{post.id}
      </span>

      <h2 className="text-lg font-bold text-gray-800 mt-2 mb-3 capitalize">
        {post.title}
      </h2>

      <p className="text-gray-600 leading-7">
        {post.body}
      </p>
    </div>
  );
};

export default PostCard;

