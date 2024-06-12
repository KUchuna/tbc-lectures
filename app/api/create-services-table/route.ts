import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (_: NextRequest) => {
  try {
    const result = await sql`
      CREATE TABLE services (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        short_description TEXT NOT NULL,
        sub_title VARCHAR(255),
        full_description TEXT,
        price DECIMAL(10, 2) NOT NULL,
        total_time_needed VARCHAR(255) NOT NULL,
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
