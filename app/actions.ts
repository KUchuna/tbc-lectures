"use server";
 
import { createUser,deleteUser, addService, createBooking } from "@/api";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function createUserAction(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  revalidatePath("/admin");
  await createUser(name as string, email as string, age as string);
}

export async function createBookingAction(service_id: number, auth_id: string) {
  await createBooking(service_id, auth_id)
  revalidatePath('/')
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