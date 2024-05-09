'use client';

import { deleteUserAction } from '@/app/actions';

export default function Button({ id }: { id: number }) {

  function handleDelete() {
    deleteUserAction(id);
    window.location.reload();
  }

  return <button onClick={handleDelete}>X</button>;
}