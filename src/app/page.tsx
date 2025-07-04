import Image from "next/image";

export default function Home() {
  return (
    <div  >
      <div className=" flex flex-col justify-center items-center text-[2.5vh] mt-5 gap-2 relative">
        <div className="flex flex-col justify-center items-center text-[2.5vh] mt-5 gap-2 absolute z-20 top-0 bg-[rgba(0, 0, 0, 0.79)]" >
          
        <button className="text-[2.5vh] border-[1px] p-[3px] rounded  bg-gray-200 text-black border-none pl-3 pr-3">Blog</button>
        <h1 className="text-[6vh] font-bold  italic text-white">Discover our latest news</h1>
        <p className="text-white">Discover the achivements that set us  apart. From groundbreaking projects to industry accolades.</p>
        <p className="text-white">we take pride in our accomplishments.</p>
        <div className="flex"> 
          <input type="text" className="text-[2.5vh] border-none border-black outline-0 pl-3 bg-white" placeholder="Find your next Blog "/>
          <button className="text-[2.3vh] border-[1px] p-[3.8px]  bg-blue-500 text-white">find now</button>
        </div>
        </div>
        <div className="absolute -top-7 z-10  w-full bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-500 h-[70vh] flex justify-center items-center overflow-hidden">
       
{/* fliter blur-[1px]  */}
      {/* <img src="https://images.unsplash.com/photo-1518655048521-f130df041f66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="Service" width={600} height={600}/> */}
        </div>
      </div>

    </div>
  );
}
