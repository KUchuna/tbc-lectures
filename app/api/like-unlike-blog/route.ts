import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    const { blog_id, auth_id, action } = await request.json();

    try {
        const blogExists = await sql`
            SELECT id, likes FROM blogs 
            WHERE id = ${blog_id}
        `;
        if(!auth_id) {
            return NextResponse.json({ message: "Must be Logged IN!"}, {status: 400})
        }
        if (blogExists.rowCount === 0) {
            return NextResponse.json({ message: 'Blog does not exist' }, { status: 400 });
        }
        
        // Fetch current likes count
        const currentLikes = blogExists.rows[0].likes;

        if (action === 'like') {
            // Check if the user has already liked the blog
            const existingLike = await sql`
                SELECT id FROM likedblogs 
                WHERE auth_id = ${auth_id} AND blog_id = ${blog_id}
            `;

            if (existingLike.rowCount > 0) {
                return NextResponse.json({ message: 'Blog already liked by user' }, { status: 400 });
            }

            // Insert the like into the likedblogs table
            await sql`
                INSERT INTO likedblogs (auth_id, blog_id)
                VALUES (${auth_id}, ${blog_id})
            `;

            // Update the likes count in the blogs table
            await sql`
                UPDATE blogs
                SET likes = ${currentLikes + 1}
                WHERE id = ${blog_id}
            `;

            return NextResponse.json({ message: 'Blog liked successfully' }, { status: 200 });

        } else if (action === 'unlike') {
            // Check if the user has already liked the blog
            const existingLike = await sql`
                SELECT id FROM likedblogs 
                WHERE auth_id = ${auth_id} AND blog_id = ${blog_id}
            `;

            if (existingLike.rowCount === 0) {
                return NextResponse.json({ message: 'Blog not liked by user' }, { status: 400 });
            }

            // Remove the like from the likedblogs table
            await sql`
                DELETE FROM likedblogs
                WHERE auth_id = ${auth_id} AND blog_id = ${blog_id}
            `;

            // Update the likes count in the blogs table
            await sql`
                UPDATE blogs
                SET likes = ${currentLikes - 1}
                WHERE id = ${blog_id}
            `;

            return NextResponse.json({ message: 'Blog unliked successfully' }, { status: 200 });

        } else {
            return NextResponse.json({ message: 'Invalid action specified' }, { status: 400 });
        }

    } catch (error) {
        console.error('Error updating blog likes:', error);
        return NextResponse.json({ error }, { status: 500 });
    }
};
