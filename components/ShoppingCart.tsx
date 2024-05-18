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
  console.log(cartItems);
  return (
    <>
      <ResetBtn />
      <div className="grid grid-cols-1 place-items-center gap-10 dark:bg-slate-700">
        {cartItems.map((item: Item) => (
          <ShoppingItem key={item.productid} productId={item.productid} />
        ))}
      </div>
    </>
  );
}
