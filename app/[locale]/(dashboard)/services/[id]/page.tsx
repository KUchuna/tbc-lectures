import Image from "next/image";
import { setStaticParamsLocale } from "next-international/server";
export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products");
  const products = await res.json();

  const paths = products.products.map((product: { id: number }) => ({
    id: `${product.id}`,
  }));

  return paths;
}

async function getProduct(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
}

export default async function Service({
  params: { id, locale },
}: {
  params: { id: number; locale: string };
}) {
  setStaticParamsLocale(locale);
  const product = await getProduct(id);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">{product.title}</h1>
      <Image
        src={product.thumbnail}
        alt="Product Image"
        width={400}
        height={400}
        className="mb-4 rounded-lg"
      />
      <span className="text-sm text-gray-500">In stock: {product.stock}</span>
    </div>
  );
}
