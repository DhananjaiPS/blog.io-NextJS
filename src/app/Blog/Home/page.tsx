"use client";
import { useEffect, useState } from "react";
import Loading from "@/app/componets/Loading"
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  let loadingnumber=[1,2,3,4,5,6,7,8,9,10]
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/posts");
        const data = await res.json();
        setPosts(data.posts);
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
    
        Welcome to Blog.io
      </div>

      {/* Loading */}
      {loading && (
        <div>

            {loadingnumber.map((item) => (
                     <Loading/>
                ))
            }
        </div>)
        }
    
    
    

        {/* // <div className="text-center mt-10 text-lg font-medium">Loading...</div> */}
      { !loading && (
        <div className="max-w-1xl mx-auto px-4 py-10">
          <h2 className="text-xl font-bold mb-6 text-center text-white">Latest Posts</h2>

          {/* Blog Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  flex">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow hover:shadow-md transition p-6">
                <h3 className="text-sm font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-[2vh]">{post.body}</p>
                <div className="mt-auto flex">
                  <p className="text-[2px] font-medium mb-1 text-gray-700 pr-2 text-[4vh]">Tags:</p>
                  <div className="flex flex-wrap gap-2 itmes-center text-sm">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-500 text-white [12px] h-[30px] font-semibold p-3 rounded flex items-center align-center self-center hover:bg-orange-500 transition duration-200"
                      >
                        # {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
