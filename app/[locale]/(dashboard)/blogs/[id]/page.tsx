import { setStaticParamsLocale } from "next-international/server";
interface IBlog {
  id: number;
  title: string;
  body: string;
  userId?: number;
  tags?: string[];
  reactions?: number;
  publicationDate?: string;
}

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/posts");
  const blogs = await res.json();

  const paths = blogs.posts.map((blog: IBlog) => ({
    id: `${blog.id}`,
  }));

  return paths;
}

async function getBlog(id: number) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function BlogPost({
  params: { id, locale },
}: {
  params: { id: number; locale: string };
}) {
  setStaticParamsLocale(locale);

  const blog = await getBlog(id);

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      <span>Reactions: {blog.reactions}</span>
    </div>
  );
}
