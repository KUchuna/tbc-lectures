import { getBlogs } from "@/api";
import Image from "next/image";
import LikeUnlikeBlog from "@/components/LikeUnlikeBlog";
import DeleteBlog from "@/components/DeleteBlog";
import { getSession } from "@auth0/nextjs-auth0";



interface blog {
  id: number;
  title: string;
  short_description: string;
  full_description: string;
  likes: number;
  date: string;
  image: string;
}

export default async function BlogPost({
  params: { id },
}: {
  params: { id: number};
}) {

  const blogs = await getBlogs();
  
  const blog = blogs.find((service: blog) => service.id == id);

  const formatDate = (isoDate: any) => {
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
  };
    return date.toLocaleDateString('en-GB', options);
  };

  const isoDate = blog.date
  const formattedDate = formatDate(isoDate)

  const user = await getSession()

  const isAdmin = Array.isArray(user?.user.role) && user.user.role.includes("admin");

  return (
    <div className="max-w-2xl mx-auto p-4 m-5 shadow-md rounded-lg">
      <Image src={blog.image} width={400} height={400} alt="pic" className="w-full rounded-xl mb-5" />
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-gray-400 leading-relaxed mb-6">{blog.desc}</p>
      <div dangerouslySetInnerHTML={{ __html: blog.full_description }}></div>
      <div className="flex justify-between text-gray-500 mt-4">
        <span>
          {formattedDate}
        </span>
        <span className="flex items-center gap-3">
          <LikeUnlikeBlog 
            id={blog.id}
            likes={blog.likes}
          />
        </span>
        
      </div>

      {isAdmin && <div className="w-full flex justify-center mt-7">
        <DeleteBlog 
            id={blog.id}
          />
      </div>}
    </div>
  );
}
