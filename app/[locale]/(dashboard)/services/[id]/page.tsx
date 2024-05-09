import Image from "next/image"

export async function generateStaticParams() {
    const res = await fetch('https://dummyjson.com/products')
    const products = await res.json()

    const paths = products.products.map((product: any) => ({
        id: `${product.id}`,
    }))

    return paths
}


async function getProduct(id: string) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    return data
}


export default async function Service({ params }: any) {
    
    const product = await getProduct(params.id)

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1>{product.title}</h1>
            <Image src={product.thumbnail} alt="asd" width={400} height={400}/>
            <span>In stock: {product.stock}</span>
        </div>
    )
}