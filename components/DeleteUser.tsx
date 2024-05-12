'use client';

import { deleteUserAction } from '@/app/actions';

export default function Button({ id }: { id: number }) {

  function handleDelete() {
    deleteUserAction(id);
  }

  return <button onClick={handleDelete}>X</button>;
}