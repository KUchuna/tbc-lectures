import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (request: NextRequest) => {
    
    const { service_id, auth_id } = await request.json();
    
    try {
        const serviceExists = await sql`
            SELECT id FROM services 
            WHERE id = ${service_id}
        `;

        if (serviceExists.rowCount === 0) {
            return NextResponse.json({ message: 'Service does not exist' }, { status: 400 });
        }
        
        const existingBooking = await sql`
            SELECT id FROM bookings 
            WHERE auth_id = ${auth_id} AND service_id = ${service_id}
        `;

        if (existingBooking.rowCount > 0) {
            return NextResponse.json({ message: 'Service already booked by you.' }, { status: 400 });
        }

        await sql`
            INSERT INTO bookings (auth_id, service_id)
            VALUES (${auth_id}, ${service_id})
        `;

        return NextResponse.json({ message: 'Booking added successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error adding booking:', error);
        return NextResponse.json({ error }, { status: 500 });
    }
};
