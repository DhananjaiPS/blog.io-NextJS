import { useEffect, useState } from "react";

export default function useBlogApi(id) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://dev.to/api/articles/${id || ""}`);
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    }

    fetchData();
  }, []);

  return [posts] 
} 
