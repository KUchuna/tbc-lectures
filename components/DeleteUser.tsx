'use client';

import { deleteUserAction } from '@/app/actions';

export default function Button({ id }: { id: number }) {
  return <button onClick={() => deleteUserAction(id)}>X</button>;
}