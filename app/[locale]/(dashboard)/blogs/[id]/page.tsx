import blogData from "@/datas/blogData";


function getBlog(id: number) {
  const res = blogData[id]
  return res;
}

export default async function BlogPost({
  params: { id },
}: {
  params: { id: number};
}) {

  const blog = getBlog(id);

  return (
    <div className="max-w-2xl mx-auto p-4 m-5 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 leading-relaxed mb-6">{blog.desc}</p>
      <span className="block text-gray-500 mt-4">
        Date: {blog.date}
      </span>
    </div>
  );
}
