import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          JrBlog
        </Link>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/blog">Blogs</Link>
        </nav>
      </div>
    </header>
  );
}
