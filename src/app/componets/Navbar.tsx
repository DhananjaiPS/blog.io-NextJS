import Link from "next/link"
export default function Navbar() {
  return (
    <div>
        <div className="flex justify-between items-center p-4  text-black text-[3vh] shadow-lg">
            <ul className="flex space-x-4 ">
                <li className="text-blue-500 font-bold text-3xl"><Link href="/">blog.io</Link></li>
                <li className="border-[1px] p-[3px] rounded  bg-blue-500 text-white"><Link href="/Blog/Home">Home</Link></li>
                <li className="border-[1px] p-[3px] rounded  text-black border-none"><Link href="/Blog/Blog">Blog</Link></li>
                <li className="border-[1px] p-[3px] rounded  text-black border-none"><Link href="/Blog/Service">Service</Link></li>
                <li className="border-[1px] p-[3px] rounded  text-black border-none"><Link href="/Blog/About">About</Link></li>
                <li className="border-[1px] p-[3px] rounded  text-black border-none"><Link href="/Blog/Contact">Contact</Link></li>
            </ul>
            <ul className="flex space-x-4 text-[3vh]">
                <li className="text-[2.5vh] border-[1px] p-[3.8px]  bg-blue-100 text-blue-500 border-none rounded ">Sign in</li>
                <li className="text-[2.5vh] border-[1px] p-[3.8px]  bg-blue-500 text-white rounded">Register</li>
            </ul>
        </div>
      
    </div>
  )
}
