"use server";
 
import { deleteUser, addService, createBooking, likeUnlikeBlog, getAvatar, changeUsername, deleteBooking, addBlog, resetBookings } from "@/api";
import { revalidatePath } from "next/cache";
import { list, del } from '@vercel/blob';
import { getSession } from "@auth0/nextjs-auth0";
import defaultPicture from '@/public/assets/defaultprofile.jpg'




// actions.ts
export async function createBookingAction(service_id: number, auth_id: string) {
  try {
    const response = await createBooking(service_id, auth_id);

    // Check the response status and handle accordingly
    if (response.status === 200) {
      return { success: true, message: 'Successfully booked!', color: 'green' };
    } else if (response.status === 400) {
      const data = await response.json();
      return { success: false, message: data.message || 'Service already booked by you.', color: 'yellow' };
    } else {
      return { success: false, message: 'Failed to book service. Please try again later.' };
    }
  } catch (error) {
    console.error('Error creating booking:', error);
    return { success: false, message: 'Failed to book service. Please try again later.' };
  }
}


export async function deleteBookingAction(service_id: number, auth_id: string){
  await deleteBooking(service_id, auth_id)
  revalidatePath('/bookings')
}

export async function resetBookingsAction(auth_id: string){
  await resetBookings(auth_id)
}


export async function likeBlogAction(blog_id: number, auth_id: string, action: string) {
  await likeUnlikeBlog(blog_id, auth_id, action)
}

export async function unlikeBlogAction(blog_id: number, auth_id: string, action: string) {
  await likeUnlikeBlog(blog_id, auth_id, action)
}

export async function addServiceAction(formData: FormData) {
  const { title, short_description, sub_title, full_description, price, total_time_needed, image } = Object.fromEntries(formData);
  await addService(title as string, short_description as string, sub_title as string, full_description as string, price as any, total_time_needed as string, image as string);
  revalidatePath('/services')
}

export async function addBlogAction(formData: FormData) {
  const { title, short_description, sub_title, full_description, date, image } = Object.fromEntries(formData);
  await addBlog(title as string, short_description as string, sub_title as string, full_description as string, date as any, image as string);
  revalidatePath('/services')
}

export async function changeUserNameAction(auth_id: string, new_name: string) {
  await changeUsername(auth_id, new_name);
  revalidatePath('/profile');
}

export async function deleteUserAction(id: number) {
  revalidatePath("/admin");
  await deleteUser(id);
}

export async function deletePhotoAction(avatar: string) {

  const session = await getSession()

    if (!session) {
      console.log('User is not logged in');
      return;
  }

  try {
    const user = session.user
    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!user) {
    throw new Error('no user found');
    }
    
    const response = await list();
    
    const blobToDelete = response.blobs.find(blob => blob.url === avatar);

    if (blobToDelete) {
    await del([blobToDelete.url], { token });
    revalidatePath('/')
    console.log(`Blob with URL ${avatar} was deleted`);
    } else {
    console.log('Avatar blob not found.');
    }
  } catch (error) {
      console.error('An error occurred:', error);
  }
}

export async function checkAvatarAction() {
  const session = await getSession();
  
  try {
    if (session && session.user) {
      const avatarUrl = await getAvatar(session.user.sub as string);
      const response = await list();

      const exists = response.blobs.some(blob => blob.url === avatarUrl);
      
      if (exists) {
        return avatarUrl
      }else {
        return defaultPicture
      }
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error fetching avatar:', error);
    throw new Error('Failed to check avatar');
  }
}
