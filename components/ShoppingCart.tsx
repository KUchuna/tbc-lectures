import { getCart } from "@/api";
import CartItem from "./CartItem";
import ResetBtn from "./ResetBtn";

interface Item {
  id: number;
  quantity: number;
  productid: number;
}
export const revalidate = 0;
export default async function ShoppingCart() {
  await new Promise(resolve => setTimeout(resolve, 1500))
  const cartItems = await getCart();
  return (
    <div className="min-h-screen dark:bg-slate-700 p-4 flex flex-col items-center">
      <ResetBtn />
      <div className="grid grid-cols-3 place-items-center gap-10 dark:bg-slate-700 w-full">
        {cartItems.map((item: Item) => (
          <CartItem key={item.productid} productId={item.productid} />
        ))}
      </div>
    </div>
  );
}
