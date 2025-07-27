"use client";
import Link from "next/link"
import Home from "../page"
import { useState } from "react";
export default function Navbar() {
  const navbar=["Home", "Blog", "Service", "About", "Contact"];
  const  [currentPage, setCurrentPage] = useState("Home");
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };
  return (
    <div>
        <div className="flex justify-between items-center p-4  text-black text-[3vh] shadow-lg">
            <ul className="flex space-x-4 ">
                <li className="text-blue-500 font-bold text-3xl"><Link href="/">blog.io</Link></li>
                {navbar.map((item)=>{
                    return (
                        <li 
                            key={item} 
                            className={`border-[1px] p-[3px] w-[13vh] flex justify-center rounded transition-all duration-600 ease-in"  ${currentPage === item ? 'bg-blue-500 text-white' : 'text-black border-none'}`}
                            onClick={() => handlePageChange(item)}
                        >
                            <Link href={`/Blog/${item}`}>{item}</Link>
                        </li>
                    )
                })}
                
            </ul>
            <ul className="flex space-x-4 text-[3vh]">
                <li className="text-[2.5vh] border-[1px] p-[3.8px]  bg-blue-100 text-blue-500 border-none rounded "><Link >Sign in</Link></li>
                <li className="text-[2.5vh] border-[1px] p-[3.8px]  bg-blue-500 text-white rounded">Register</li>
            </ul>
        </div>
      
    </div>
  )
}
