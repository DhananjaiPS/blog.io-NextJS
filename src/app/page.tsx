import Image from "next/image";
"use client";
import Loading from "./componets/Loading";
import BlogCard from "./componets/BlogCard";
import Link from "next/link";
import useBlogApi from "@/hooks/useblogApi";
import { useState, useEffect } from "react";
import "./globals.css";
export default function Home() {
  const [flag,setFlag]= useState(false);

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [searchItem, setSearchItem] = useState(null);
  const [value, setValue] = useState("");
  let loadingnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  




async function handelSearch() {
  try {
      const res = await fetch(`https://dev.to/api/articles?tag=${value}`);
      const data = await res.json();
      console.log(data);
      setSearchItem(data);
      setLoading(false); // Move this inside to avoid early rendering
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  console.log(value);
  console.log(searchItem)  
  setValue(""); 
  setFlag(true);
  console.log(flag);


}
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
  <div  >
    <div className=" flex flex-col justify-center items-center text-[2.5vh] mt-5 gap-2 relative h-full">
      <div className="flex flex-col justify-center items-center text-[2.5vh] mt-5 gap-2 relative z-20 top-0 bg-[rgba(0, 0, 0, 0.79)]" >

        <button className="text-[2.5vh] border-[1px] p-[3px] rounded  bg-gray-200 text-black border-none pl-3 pr-3">Blog</button>
        <h1 className="text-[6vh] font-bold  italic text-white">Discover our latest news</h1>
        <p className="text-white">Discover the achivements that set us  apart. From groundbreaking projects to industry accolades.</p>
        <p className="text-white">we take pride in our accomplishments.</p>
        <div className="flex">
          <input type="text" className="text-[2.5vh] border-none border-black outline-0 pl-3 bg-white" value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="Find your next Blog " />
          <button className="text-[2.3vh] border-[1px] p-[3.8px]  bg-blue-500 text-white" onClick={handelSearch}>find now</button>
        </div>
      </div>

      <div className="absolute -top-7 z-1  w-full bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 h-[50vh] flex justify-center items-center overflow-hidden">

      </div>
    </div>
    {loading && (
      <div className="bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 h-full">

        {loadingnumber.map((item) => (
          <Loading />
        ))
        }
      </div>)
    }
    { !flag && !loading && (
      <div className="max-w-1xl mx-auto px-4 py-10 z-20 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500">
        <h2 className="text-xl font-bold mb-6 text-center text-white">View our Latest Blogs</h2>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  flex">
          {posts.map((post, index) => (
            <Link href={`/Blog/Blog/${post.id}`} key={post.id || index}>
              <BlogCard post={post} />
            </Link>

          ))}
        </div>
      </div>
    )}
    { flag && !loading && (
      <div className="max-w-1xl mx-auto px-4 py-10 z-20 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500">
        <h2 className="text-xl font-bold mb-6 text-center text-white">View our Latest Blogs</h2>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3  flex">
          { //@ts-ignore
          searchItem?.map((post, index) => (
            <Link href={`/Blog/Blog/${post.id}`} key={post.id || index}>
              <BlogCard post={post} />
            </Link>

          ))}
        </div>
      </div>
    )}

  </div>
);
}
