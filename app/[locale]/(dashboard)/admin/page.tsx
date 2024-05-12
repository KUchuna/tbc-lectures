"use server"
import { User, getUsers } from '@/api';
import DeleteUser from '@/components/DeleteUser.tsx';
import AddUser from '@/components/AddUser.tsx';
// import EditUser from '@/components/EditUser';

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="flex flex-col justify-center items-center w-full mb-[800px]">
        <AddUser />
      {users.map((user: User) => (
        <div className="flex justify-between border-b w-[400px]" key={user.id}>
          <div className="flex gap-4">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.age}</p>
          </div>
          {/* <EditUser id ={user.id}/> */}
          <DeleteUser id={user.id} />
        </div>
      ))}

    </div>
  );
}