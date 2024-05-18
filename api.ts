import { revalidatePath } from "next/cache";

export interface User {
    id: number;
    age: number;
    name: string;
    email: string;
  }
  
  
  export async function getUsers() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-users`);
    const { users } = await response.json();
  
    return users.rows;
  }

  export async function getCart() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-cart-items`);
    const { cart } = await response.json();
    revalidatePath('/services')
    return cart.rows;
  }
  
  export async function createUser(name: string, email: string, age: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/create-user`, {
      method: 'POST',
      body: JSON.stringify({ name, email, age }),
    });
  }
  
  export async function deleteUser(id: number) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/delete-user/${id}`, {
      method: 'DELETE',
    });
  }

  export async function createCartItem(productId: number) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/create-cart-item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      }
    );
   
    return response;
  }