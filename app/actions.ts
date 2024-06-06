"use server";
 
import { createUser,deleteUser,createCartItem,resetCart,decreaseCartItem, removeCartItem } from "@/api";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  revalidatePath("/admin");
  await createUser(name as string, email as string, age as string);
}
 
export async function deleteUserAction(id: number) {
  revalidatePath("/admin");
  await deleteUser(id);
}
 
export async function editUserAction(
  id: number,
  name: string,
  email: string,
  age: string
) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/edit-user`, {
      method: "PUT",
      body: JSON.stringify({ id, name, email, age }),
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  revalidatePath("/admin");
}
 
export async function createCartItemAction(productId: number) {
  await createCartItem(productId);
  revalidatePath("/services");
}
 
export async function resetCartAction() {
  await resetCart();
  revalidatePath("/cart");
}

export async function removeCartItemAction(productId: number) {
  await removeCartItem(productId);
  revalidatePath("/cart");
}

export async function decreaseCartItemAction(productId: number) {
  await decreaseCartItem(productId);
  revalidatePath("/cart");
}