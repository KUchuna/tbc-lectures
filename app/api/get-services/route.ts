import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const revalidate = 0;

export async function GET() {
  try {
    const services = await sql`SELECT * FROM services;`;

    return NextResponse.json({ services }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}