export interface User {
    id: number;
    age: number;
    name: string;
    email: string;
  }
  
  export const BASE_URL = 'http://localhost:3000';
  
  export async function getUsers() {
    const response = await fetch(BASE_URL + '/api/get-users');
    const { users } = await response.json();
  
    return users.rows;
  }
  
  export async function createUser(name: string, email: string, age: string) {
    "use server"
    return await fetch(BASE_URL + '/api/create-user', {
      method: 'POST',
      body: JSON.stringify({ name, email, age }),
    });
  }
  
  export async function deleteUser(id: number) {
    return await fetch(`${BASE_URL}/api/delete-user/${id}`, {
      method: 'DELETE',
    });
  }