"use server";

import { AUTH_COOKIE_KEY } from "@/constants";
import { cookies } from "next/headers";
import { createUser, deleteUser, createCartItem, resetCart } from "@/api";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function login(username: string, password: string) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const user = await response.json();
  const cookieStore = cookies();
  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token));
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);
}

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
    await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/edit-user`, {
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
