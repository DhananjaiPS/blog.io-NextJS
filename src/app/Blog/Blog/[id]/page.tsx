"use client"
import { use } from "react"
import useBlogApi from "@/hooks/useblogApi";
export default function page({ params }) {
    const { id } = use(params)
    const [blogData] = useBlogApi(id);
    

    return (
        <div>
           <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {blogData.cover_image && (
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-6">
            <img
              src={blogData.cover_image}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {blogData.title}
        </h1>
        <div className="text-sm text-gray-600 flex gap-4 mb-6">
          <span>🗓 {blogData.readable_publish_date}</span>
          <span>💬 {blogData.comments_count} comments</span>
          <span>❤️ {blogData.public_reactions_count} reactions</span>
          <span>⏱ {blogData.reading_time_minutes} min read</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {Array.isArray(blogData.tags) &&
            blogData.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
        </div>
        <p className="text-lg leading-relaxed mb-8">
          {blogData.description} <br />
          <br />
          This is a preview content. For full details, visit the original post.
        </p>
        <a
          href={blogData.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition"
        >
          Read Full Article →
        </a>
      </div>
    </div>
        </div>
    )
}
