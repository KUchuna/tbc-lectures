import { getCart } from "@/api";
import ShoppingItem from "./ShoppingItem";
import ResetBtn from "./ResetBtn";

interface Item {
  id: number;
  quantity: number;
  productid: number;
}
export const revalidate = 0;
export default async function ShoppingCart() {
  const cartItems = await getCart();
  return (
    <div className="min-h-screen bg-slate-700 p-4 flex flex-col items-center">
      <ResetBtn />
      <div className="grid grid-cols-1 place-items-center gap-10 w-full">
        {cartItems.map((item: Item) => (
          <ShoppingItem key={item.productid} productId={item.productid} />
        ))}
      </div>
    </div>
  );
}
