// import {useEffect, useState} from "react";

// interface Post {
//   userid: number;
//   id:number;
//   title: String;
//   body: String;
// }

// const PostList = () => {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const controller = new AbortController()
//     const fetchPosts = async () =>{
//       try {
//         setLoading(true)
//         setError(null)

//         const res = await fetch("https://jsonplaceholder.typ l,nlicode.com/posts?_limit=10" ,{signal:controller.signal});
//         if(!res.ok) {
//           throw new Error(`Server Error: ${res.status}`)
//         }
       
//         const data: Post[] = await res.json()

//         setPosts(data);

//       } catch (error: unknown) {
//         if(error instanceof Error && error.name !== "AbortError"){
//           setError(error.message || "Error on fetching");
//         }
//       } finally{
//         setLoading(false)
//       }
//     };

//     fetchPosts();
//     return() => controller.abort()
//   },[]);
//   if(loading) return <div className="spinner">loading...</div>;
//   if(error) return <div className="error-badge">error:{error}</div>;
  
//   return <ul className="p-3 border border-gray-800 m-3 rounded-lg space-y-2">
//     {posts.map(post => (
//       <li key={post.id} className="p-2 bg-blue-50 rounded-lg">
//         <h3 className="text-2xl">{post.title}</h3> 
//         <p className="text-gray-300">{post.body}</p>
//       </li>
//     )
//     )}
//   </ul>
// }
// export default PostList





import type { Post } from "../types/post-temp";
import PostCard from "./PostCard";

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;