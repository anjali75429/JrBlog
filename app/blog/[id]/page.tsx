import { getPost } from "@/lib/fetchPosts";
import { notFound } from "next/navigation";

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        {post.title}
      </h1>

      <p className="text-gray-700 leading-7">
        {post.body}
      </p>
    </div>
  );
}
