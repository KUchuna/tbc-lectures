import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function DELETE() {
  try {
    await sql`
      DROP TABLE IF EXISTS cart;
    `;

    return NextResponse.json({ message: 'Table "cart" dropped successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error dropping table:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
