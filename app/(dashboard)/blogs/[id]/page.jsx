export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/posts')
    const blogs = await res.json()

    const paths = blogs.posts.map((post) => ({
        params: { id: post.id.toString()}
    }))
    return paths
}



async function getProduct(id) {
    const res = await fetch(`https://dummyjson.com/posts/${id}`)
    const data = await res.json()
    return data
}


export default async function BlogPost({params}) {

    const blog = await getProduct(params.id)

    return(
        <div>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            <span style={{color: "orange", fontWeight: "bold"}}>Reactions: {blog.reactions}</span>
        </div>
    )
}