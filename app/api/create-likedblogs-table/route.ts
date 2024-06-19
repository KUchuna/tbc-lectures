import { sql } from '@vercel/postgres';
import { NextResponse, NextRequest } from 'next/server';

export const GET = async (_: NextRequest) => {
    try {
        const result = await sql`
            CREATE TABLE likedblogs (
                id SERIAL PRIMARY KEY,
                likes INTEGER DEFAULT 0,
                auth_id VARCHAR(255) REFERENCES authusers(auth_id) ON DELETE CASCADE,
                blog_id INTEGER REFERENCES blogs(id) ON DELETE CASCADE,
                UNIQUE(auth_id, blog_id)
            );
        `;
        console.log("Table Creation Result:", result);
        return NextResponse.json({ message: 'Table created successfully' }, { status: 200 });
    } catch (error) {
        console.error("Table Creation Error:", error);
        return NextResponse.json({ error }, { status: 500 });
    }
};
