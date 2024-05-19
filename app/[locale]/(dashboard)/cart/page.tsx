import ShoppingCart from "@/components/ShoppingCart";

export default function Cart() {
  return (
    <div className="min-h-[100vh] dark:bg-slate-700 flex justify-center items-center">
      <section className="overflow-y-auto h-[full] py-[50px]">
        <ShoppingCart />
      </section>
    </div>
  )
}
