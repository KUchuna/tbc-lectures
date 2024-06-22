"use server";
 
import { createUser,deleteUser, addService, createBooking, likeUnlikeBlog, getAvatar } from "@/api";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { list, del } from '@vercel/blob';
import { getSession } from "@auth0/nextjs-auth0";
import defaultPicture from '@/public/assets/defaultprofile.jpg'

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  revalidatePath("/admin");
  await createUser(name as string, email as string, age as string);
}

export async function createBookingAction(service_id: number, auth_id: string) {
  await createBooking(service_id, auth_id)
  revalidatePath('/')
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