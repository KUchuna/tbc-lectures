import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (request: NextRequest) => {
  try {
    const { auth_id, new_name } = await request.json();

    if (!auth_id || !new_name) {
      return NextResponse.json({ error: 'auth_id and new_name are required' }, { status: 400 });
    }

    const result = await sql`
      UPDATE authusers
      SET name = ${new_name}
      WHERE auth_id = ${auth_id}
      RETURNING *;
    `;

    if (result.rowCount === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const updatedUser = result.rows[0];

    return NextResponse.json({ user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
  }
};
