export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/posts')
    const blogs = await res.json()

    const paths = blogs.posts.map((post: {id: number}) => ({
        id: `${post.id}`,
    }))
    return paths
}



async function getBlog(id: number) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    const data = await res.json()
    return data
}


export default async function BlogPost({params}: { params: {id: number}}) {

    const blog = await getBlog(params.id)

    return(
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <span>Reactions: {blog.reactions}</span>
        </div>
    )
}