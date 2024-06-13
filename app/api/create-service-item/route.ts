import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { title, short_description, sub_title, full_description, price, total_time_needed, image } = body;

    // Validate required fields
    if (!title || !short_description || !price || !total_time_needed || !image || !sub_title || !full_description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO services (
        title,
        short_description,
        sub_title,
        full_description,
        price,
        total_time_needed,
        image
      ) VALUES (
        ${title},
        ${short_description},
        ${sub_title},
        ${full_description},
        ${price},
        ${total_time_needed},
        ${image}
      );
    `;

    console.log("Service Insertion Result:", result);
    return NextResponse.json({ message: 'Service added successfully' }, { status: 200 });
  } catch (error) {
    console.error("Service Insertion Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
