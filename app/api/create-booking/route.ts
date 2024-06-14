import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

// Function to add a booking for a user
export const POST = async (request: NextRequest) => {
    
    const { service_id, auth_id } = await request.json();
    
    // const data = await getSession();

    // let auth_id;

    try {
        // if(data) {
        //     auth_id = data.user.sub;
        //     }
        // Check if the service exists
        const serviceExists = await sql`
            SELECT id FROM services 
            WHERE id = ${service_id}
        `;

        if (serviceExists.rowCount === 0) {
            return NextResponse.json({ message: 'Service does not exist' }, { status: 400 });
        }
        
        // Check if the user already has booked this service
        const existingBooking = await sql`
            SELECT id FROM bookings 
            WHERE auth_id = ${auth_id} AND service_id = ${service_id}
        `;

        if (existingBooking.rowCount > 0) {
            return NextResponse.json({ message: 'Service already booked by user' }, { status: 400 });
        }

        // Insert the booking into the bookings table
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
