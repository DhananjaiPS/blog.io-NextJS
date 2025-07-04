"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/componets/Loading";
import Link from "next/link";
// import BlogCard from "@/app/componets/BlogCard";
import BlogCard from "@/app/componets/BlogCard";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  let loadingnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dev.to/api/articles");
        const data = await res.json();
        console.log(data);
        setPosts(data);
        setLoading(false); // Move this inside to avoid early rendering
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-gray-800 relative">
      {/* Hero Section */}
      <div className="w-full  bg-cover bg-center flex items-start p-2 justify-center text-white text-4xl font-bold  bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 "
      >

        Welcome to Blog page
      </div>

      {/* Loading */}
      {loading && (
        <div>

          {loadingnumber.map((item) => (
            <Loading />
          ))
          }
        </div>)
      }




      {/* // <div className="text-center mt-10 text-lg font-medium">Loading...</div> */}
      {!loading && (
        <div className="max-w-1xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-6 text-center text-white">View our Latest Blogs</h2>

          {/* Blog Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  flex">
            {posts.map((post, index) => (
              <Link href={`/Blog/Blog/${post.id}`} key={post.id || index}>
              <BlogCard post={post}/>
              </Link>
              
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
