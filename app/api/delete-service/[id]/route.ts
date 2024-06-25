import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';


export async function DELETE(request: NextRequest) {
    const serviceId = request.nextUrl.pathname.replace('/api/delete-service/', '');
  
    try {
      if (!serviceId) throw new Error('ID is required');
  
  
      const { rows } = await sql`SELECT id FROM services WHERE id = ${Number(serviceId)};`;
      if (rows.length === 0) {
        throw new Error('servuce not found');
      }
  
      const service_id = rows[0].id;
  
  
      await sql`DELETE FROM bookings WHERE service_id = ${service_id};`;
 
      await sql`DELETE FROM services WHERE id = ${Number(service_id)};`;
  

    } catch (error) {
      console.error('Error deleting user:', error);
      return NextResponse.json({ error }, { status: 500 });
    }
  
    const users = await sql`SELECT * FROM authusers;`;
  
    return NextResponse.json({ users }, { status: 200 });
  }