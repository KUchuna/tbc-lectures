import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export const DELETE = async (request: NextRequest) => {
  
  const {service_id, auth_id} = await request.json()

  try {
    if (!service_id || !auth_id) {
      throw new Error('service_id and auth_id are required');
    }

    const result = await sql`
      DELETE FROM bookings
      WHERE service_id = ${service_id} AND auth_id = ${auth_id}
      RETURNING *;
    `;

    if (result.rowCount === 0) {
      return NextResponse.json({ message: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Booking deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting booking:', error);
    return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
  }
};
