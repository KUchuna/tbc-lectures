'use server'

import { AUTH_COOKIE_KEY } from "@/constants"
import { cookies } from "next/headers"
import { createUser, deleteUser } from '@/api';
export async function login(username: string, password: string) {
   const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username,
        password,
  })
})
    const user = await response.json()
    const cookieStore = cookies()
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token))
}

export async function logout() {
    const cookieStore = cookies()
    cookieStore.delete(AUTH_COOKIE_KEY)
}


export async function createUserAction(formData: FormData) {
  const { name, email } = Object.fromEntries(formData);

  return createUser(name as string, email as string);
}

export async function deleteUserAction(id: number) {
  await deleteUser(id);
}