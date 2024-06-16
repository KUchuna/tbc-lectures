import { revalidatePath } from "next/cache";

export interface User {
  id: number;
  avatar: string;
  name: string;
  email: string;
}


export async function getUsers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-users`, {cache: 'no-store'});
  const { users } = await response.json();
  revalidatePath('/admin')
  console.log("users: " +users.rows)
  return users.rows;
}

export async function getServices() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/get-services`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || !data.services || !Array.isArray(data.services.rows)) {
      throw new Error('Invalid response format: missing or invalid data');
    }

    return data.services.rows;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw new Error('Failed to fetch services. Please try again later.');
  }
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

// Function to get bookings and extract service IDs
export async function getBookedIds(auth_id: string) {
  try {
    if (!auth_id) {
      throw new Error('auth_id is required');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-bookings?auth_id=${auth_id}`, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Failed to fetch bookings (${response.status} ${response.statusText})`);
    }

    const { bookings } = await response.json();

    if (!bookings || !Array.isArray(bookings.rows)) {
      throw new Error('Invalid response format: missing or invalid data');
    }

    // Extract and return service IDs
    const serviceIds = bookings.rows.map((booking: { service_id: number }) => booking.service_id);
    return serviceIds;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw new Error('Failed to fetch bookings. Please try again later.');
  }
}

// export async function getBookedServices(serviceIds: number[]) {
  
//   try {
//     if (!serviceIds || serviceIds.length === 0) {
//       throw new Error('Service IDs are required');
//     }
    
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-services?service_id=${serviceIds}`, { cache: 'no-store' });

//     if (!response.ok) {
//       throw new Error(`Failed to fetch services (${response.status} ${response.statusText})`);
//     }

//     const { services } = await response.json();

//     if (!services || !Array.isArray(services)) {
//       throw new Error('Invalid response format: missing or invalid data');
//     }
//     console.log(services)
//     return services;
//   } catch (error) {
//     console.error('Error fetching services:', error);
//     throw new Error('Failed to fetch services. Please try again later.');
//   }
// }

// // Function to fetch bookings and corresponding services
// export async function fetchBookingsAndServices(auth_id: string) {
//   try {
//     const bookings = await getBookings(auth_id);
//     const serviceIds = bookings.map((booking: any) => booking.service_id);
//     const services = await getBookedServices(serviceIds);
//     return { bookings, services };
//   } catch (error) {
//     console.error('Error fetching bookings and services:', error);
//     throw new Error('Failed to fetch bookings and services. Please try again later.');
//   }
// }




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
