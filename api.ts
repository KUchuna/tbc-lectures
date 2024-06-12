import { revalidatePath } from "next/cache";

export interface User {
  id: number;
  avatar: string;
  name: string;
  email: string;
}
 
export async function getUsers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-users`
  );
  const { users } = await response.json();
 
  return users.rows;
}

export async function getServices() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-services`
  );
  //idk why but using anything else than users does not work
  const { users } = await response.json();
 
  return users.rows;
}


export async function getService(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-service${id}`
  );
  return response;
}


export async function getCart() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-cart-items`
  );
  const { cart } = await response.json();
  revalidatePath("/services");
  return cart.rows;
}
 
export async function createUser(name: string, email: string, age: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/create-user`, {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function addService(title: string, short_description: string, sub_title: string, full_description: string, price: number, total_time_needed: string, image: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/create-service-item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title, short_description, sub_title, full_description, price, total_time_needed, image}),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


export async function deleteUser(id: number) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/delete-user/${id}`,
    {
      method: "DELETE",
    }
  );
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
 
export async function resetCart() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/reset-cart`,
    {
      method: "DELETE",
    }
  );
 
  return response;
}

export async function decreaseCartItem(productId: number) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/decrease-cart-item/${productId}`,
    {
      method: "POST",
      body: JSON.stringify({ productId }),
    }
  );
}

export async function removeCartItem(productId: number) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/remove-cart-item`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  return response.json();
}

