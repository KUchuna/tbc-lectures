import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
 
export const revalidate = 0;

export async function GET() {
  try {
    const result = await sql`
      CREATE TABLE bookings (
        id SERIAL PRIMARY KEY,
        service_id INT NOT NULL,
        auth_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (auth_id) REFERENCES authusers(auth_id),
        FOREIGN KEY (service_id) REFERENCES services(id)
      )
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
 