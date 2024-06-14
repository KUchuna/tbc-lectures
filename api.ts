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

 
export async function createUser(name: string, email: string, age: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/create-user`, {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });
}

export async function createBooking(service_id: number, auth_id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/create-booking`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ service_id, auth_id }),
    }
  );
 
  revalidatePath('/services')
  return response;
}

export async function getBookings(auth_id: string) {
  try {
    if (!auth_id) {
      throw new Error('auth_id is required');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-bookings?auth_id=${auth_id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch bookings (${response.status} ${response.statusText})`);
    }

    const { bookings } = await response.json();

    if (!bookings || !Array.isArray(bookings.rows)) {
      throw new Error('Invalid response format: missing or invalid data');
    }
    revalidatePath('/bookings')
    return bookings.rows;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw new Error('Failed to fetch bookings. Please try again later.'); // Throw a new error to be caught by the caller
  }

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
