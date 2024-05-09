import { createUserAction } from '@/app/actions.ts';
import { User, getUsers } from '@/api';
import DeleteUser from '@/components/DeleteUser.tsx';

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="px-5">
      {users.map((user: User) => (
        <div className="flex justify-between border-b" key={user.id}>
          <div className="flex gap-4 border-b">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>

          <DeleteUser id={user.id} />
        </div>
      ))}
    </div>
  );
}