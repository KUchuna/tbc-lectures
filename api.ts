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

export async function addService() {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/create-service-item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Ceramic coating',
      short_description: "Ceramic coating, also known as nano-ceramic coating, is a protective layer that is applied to a vehicle's exterior surfaces to provide superior protection and enhance the appearance of the paint. This advanced technology uses nanotechnology to create a durable, microscopic layer that bonds with the vehicle's surface, forming a hydrophobic barrier that repels water, dirt, and other contaminants.",
      sub_title: "Advanced Protection and Aesthetic Enhancement",
      full_description: "The primary benefit of ceramic coating is its ability to provide long-lasting protection. Unlike traditional waxes or sealants, ceramic coatings can last for several years, depending on the product and application method. This durability means that the vehicle's paint is shielded from harmful UV rays, which can cause fading and oxidation over time. Additionally, the coating protects against chemical stains, bird droppings, tree sap, and other environmental hazards that can damage the paint. One of the most appealing aspects of ceramic coating is its ability to create a high-gloss finish that enhances the depth and clarity of the vehicle's paint. This glossy layer not only makes the car look stunning but also makes it easier to clean. The hydrophobic properties of the coating cause water and other liquids to bead up and roll off the surface, taking dirt and grime with them. This self-cleaning effect reduces the frequency of washing and makes maintenance much simpler.",
      price: 200,
      total_time_needed: '1h 10m',
      image: 'https://i.ibb.co/LzX09jt/service6.png',
    }),
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}