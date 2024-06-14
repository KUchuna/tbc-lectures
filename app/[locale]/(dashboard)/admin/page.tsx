"use server"
import { User, getUsers } from '@/api';
import DeleteUser from '@/components/DeleteUser.tsx';
import AddUser from '@/components/AddUser.tsx';
// import EditUser from '@/components/EditUser';
import Image from 'next/image';

export default async function UsersPage() {
  
  const users = await getUsers();

  return (
    <div className="flex flex-col items-center w-full p-4 bg-gray-100 dark:bg-slate-800 min-h-screen">
      <AddUser />
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
                  {/* <EditUser id={user.id} /> */}
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
