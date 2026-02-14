"use client";

import { useState } from "react";
import { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }: { posts: Blog[] }) {
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search blog..."
        className="border p-2 mb-6 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.length === 0 ? (
        <p className="text-gray-500">No blogs found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </div>
      )}
    </div>
  );
}
