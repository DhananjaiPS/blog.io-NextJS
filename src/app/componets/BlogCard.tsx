"use client"
export default function BlogCard( {post} ) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-md transition p-6">
      <img src={post.social_image || "/blogHero.webp"} alt="social img" />
      <h3 className="text-sm font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-3 text-[2vh]">{post.description}</p>
      <div className="mt-auto flex">
        <p className="text-[2px] font-medium mb-1 text-gray-700 pr-2 text-[4vh]">Tags:</p>
        <div className="flex flex-wrap gap-2 items-center text-sm">
          {Array.isArray(post.tag_list) && post.tag_list.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-[12px] h-[30px] font-semibold p-3 rounded flex items-center align-center self-center hover:bg-orange-500 transition duration-200"
            >
              # {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
