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
  const cartItems = await getCart();
  return (
    <>
      <ResetBtn />
      <div className="grid grid-cols-3 place-items-center gap-10 dark:bg-slate-700 w-full">
        {cartItems.map((item: Item) => (
          <CartItem key={item.productid} productId={item.productid} />
        ))}
      </div>
    </>
  );
}
