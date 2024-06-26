"use server"

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
  return users.rows;
}

export async function getCurrentUser(auth_id: string) {
  try {
    if (!auth_id) {
      throw new Error('auth_id is required');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/current-user?auth_id=${auth_id}`, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Failed to fetch user (${response.status} ${response.statusText})`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw new Error('Failed to fetch user. Please try again later.');
  }
}

export async function changeUsername(auth_id: string, new_name: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/change-username`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ auth_id, new_name }),
    });

    if (!response.ok) {
      throw new Error(`Failed to change username (${response.status} ${response.statusText})`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed to change username');
  }
}


export async function getServices() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-services`, {cache: 'no-store'});
  const {services} = await response.json();
  return services.rows;
}

export async function getAvatar(auth_id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-avatar?auth_id=${auth_id}`, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch avatar (${response.status} ${response.statusText})`);
    }

    const data = await response.json();
    return data.avatar;
  } catch (error) {
    console.error('Error fetching avatar:', error);  // Log detailed error information
    throw new Error('Failed to fetch avatar. Please try again later.');
  }
}


export async function getBlogs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/get-blogs`, {cache: 'no-store'});
  const {blogs} = await response.json();
  return blogs.rows;
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
  revalidatePath('/bookings')
  return response;
}

export async function deleteBooking(service_id: number, auth_id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cancel-booking`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ service_id, auth_id }),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete booking: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error('Error deleting booking:', error);
  }
}

export async function resetBookings(auth_id: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reset-bookings`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ auth_id }),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete booking: ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result.message);
  } catch (error) {
    console.error('Error deleting booking:', error);
  }
}

export async function likeUnlikeBlog(blog_id: number, auth_id: string, action: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/like-unlike-blog`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ blog_id, auth_id, action }),
    }
  );
 
  revalidatePath('/services')
  return response;
}

export async function getLikedBlogIds(auth_id: string) {
  try {
    if (!auth_id) {
      throw new Error('auth_id is required');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-liked-blogs?auth_id=${auth_id}`, { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`Failed to fetch liked blogs (${response.status} ${response.statusText})`);
    }

    const responseData = await response.json();

    if (!responseData || !responseData.likedblogs || !Array.isArray(responseData.likedblogs.rows)) {
      throw new Error('Invalid response format: missing or invalid data');
    }
    
    const likedBlogIds = responseData.likedblogs.rows.map((row: any) => row.blog_id);
    return likedBlogIds;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw new Error('Failed to fetch blogs. Please try again later.');
  }
}


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

    const serviceIds = bookings.rows.map((booking: { service_id: number }) => booking.service_id);
    return serviceIds;
  } catch (error) {
    console.error('Error fetching bookings:', error);
    throw new Error('Failed to fetch bookings. Please try again later.');
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

export async function addBlog(title: string, short_description: string, sub_title: string, full_description: string, date: string, image: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/create-blog-item`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({title, short_description, sub_title, full_description, date, image}),
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

export async function deleteService(id: number) {

  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/delete-service/${id}`,
    {
      method: "DELETE",
    }
  );
}

export async function deleteBlog(id: number) {
  
  return await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/delete-blog/${id}`,
    {
      method: "DELETE",
    }
  );
}