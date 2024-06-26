"use server"
import { User, getUsers } from '@/api';
import DeleteUser from '@/components/DeleteUser.tsx';
import Image from 'next/image';
import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function UsersPage() {
  
  const users = await getUsers();

  const data = await getSession();


  if (!data || !data.user) {
    redirect('/');
  }

  const user = data.user;


  const isAdmin = Array.isArray(user.role) && user.role.includes("admin");
  if (!isAdmin) {
    redirect('/');
  }

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 bg-gray-100 dark:bg-slate-800 min-h-screen">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-200 dark:bg-slate-700 text-left">
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Email</th>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Avatar</th>
              <th className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user.id} className="hover:bg-gray-100 dark:hover:bg-slate-800">
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{user.name}</td>
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">{user.email}</td>
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700"><Image src={user.avatar} alt='' width={30} height={30}></Image></td>
                <td className="py-2 px-4 border-b border-gray-200 dark:border-gray-700">
                  <DeleteUser id={user.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
