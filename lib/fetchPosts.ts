import { Blog } from "@/types/blog";

export async function getPosts(): Promise<Blog[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPost(id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();

  if (!data || !data.id) return null;

  return data;
}



