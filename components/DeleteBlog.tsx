'use client';

import { deleteBlogAction } from '@/app/actions';
import { useRouter } from 'next/navigation';


export default function DeleteBlog({ id }: { id: number }) {

    const router = useRouter()

    async function handleDelete() {
        try {
            deleteBlogAction(id);
        }   catch (error) {
            console.log(error)
        }   finally {
            router.push('/blogs')
        }
      }

    return (
        <button onClick={handleDelete} className="uppercase bg-light-orange py-[8px] px-[12px] w-max text-white rounded-xl font-bold transition-colors duration-300 hover:bg-dark-orange mb-7">delete this blog</button>
    )
}