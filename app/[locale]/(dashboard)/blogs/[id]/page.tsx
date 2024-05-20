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
    <div className="max-w-2xl mx-auto p-4 m-5 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 leading-relaxed mb-6">{blog.body}</p>
      <span className="block text-gray-500 mt-4">
        Reactions: {blog.reactions}
      </span>
    </div>
  );
}
