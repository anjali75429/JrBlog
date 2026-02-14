import Link from "next/link";
import { Blog } from "@/types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="border p-5 rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <h2 className="text-lg font-bold mb-2">
        {blog.title}
      </h2>
      <p className="text-gray-600 mb-3">
        {blog.body.substring(0, 80)}...
      </p>
      <Link
        href={`/blog/${blog.id}`}
        className="text-blue-600 font-medium"
      >
        Read More →
      </Link>
    </div>
  );
}
