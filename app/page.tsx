import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to JrBlog
      </h1>
      <p className="text-gray-600 mb-6">
        Read the latest blog posts.
      </p>
      <Link
        href="/blog"
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        View Blogs
      </Link>
    </div>
  );
}
