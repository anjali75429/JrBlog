import { getPosts } from "@/lib/fetchPosts";
import BlogList from "@/components/BlogList";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Blog Posts
      </h1>

      <BlogList posts={posts.slice(0, 20)} />
    </div>
  );
}
