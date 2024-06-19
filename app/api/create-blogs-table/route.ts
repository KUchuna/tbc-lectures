import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (_: NextRequest) => {
  try {
    const result = await sql`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        short_description TEXT NOT NULL,
        full_description TEXT,
        likes INTEGER NOT NULL DEFAULT 0,
        date DATE DEFAULT CURRENT_DATE,
        image VARCHAR(255)
      );
    `;
    console.log("Table Creation Result:", result);
    return NextResponse.json({ message: 'Table created successfully' }, { status: 200 });
  } catch (error) {
    console.error("Table Creation Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
