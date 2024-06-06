import ShoppingCart from "@/components/ShoppingCart";
import { Suspense } from 'react'
import CartLoading from '../../../../components/Cartloading.tsx'

export default async function Cart() {
  
  return (
    <div className="min-h-[100vh] dark:bg-slate-700 flex justify-center items-center">
      <section className="overflow-y-auto h-[full] py-[50px]">
        <Suspense fallback={<CartLoading />}>
          <ShoppingCart />
        </Suspense>
      </section>
    </div>
  )
}
