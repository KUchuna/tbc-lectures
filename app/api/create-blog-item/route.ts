import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    const { title, short_description, full_description, likes = 0, image, date = new Date().toISOString().split('T')[0] } = body;

    if (!title || !short_description || !image || !full_description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO blogs (
        title,
        short_description,
        full_description,
        likes,
        date,
        image
      ) VALUES (
        ${title},
        ${short_description},
        ${full_description},
        ${likes},
        ${date},
        ${image}
      );
    `;

    console.log("Blog Insertion Result:", result);
    return NextResponse.json({ message: 'Blog added successfully' }, { status: 200 });
  } catch (error) {
    console.error("Blog Insertion Error:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
};
