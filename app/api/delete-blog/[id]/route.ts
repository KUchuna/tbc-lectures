import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';


export async function DELETE(request: NextRequest) {
    const blogId = request.nextUrl.pathname.replace('/api/delete-blog/', '');
  
    try {
      if (!blogId) throw new Error('ID is required');
  
  
      const { rows } = await sql`SELECT id FROM blogs WHERE id = ${Number(blogId)};`;
      if (rows.length === 0) {
        throw new Error('blog not found');
      }
  
      const blog_id = rows[0].id;
  
  
      await sql`DELETE FROM likedblogs WHERE blog_id = ${blog_id};`;
 
      await sql`DELETE FROM blogs WHERE id = ${Number(blog_id)};`;
  

    } catch (error) {
      console.error('Error deleting user:', error);
      return NextResponse.json({ error }, { status: 500 });
    }
  
    const users = await sql`SELECT * FROM authusers;`;
  
    return NextResponse.json({ users }, { status: 200 });
  }