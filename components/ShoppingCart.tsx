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
    <>
      <ResetBtn />
      <div>
        {cartItems.map((item: Item) => (
          <ShoppingItem key={item.productid} productId={item.productid} />
        ))}
      </div>
    </>
  );
}
