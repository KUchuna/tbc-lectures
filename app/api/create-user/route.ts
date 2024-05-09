import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const age = searchParams.get('age');
 
  try {
    if (!name || !email || !age) throw new Error('Pet and owner names required');
    await sql`INSERT INTO users (name, email, age) VALUES (${name}, ${email}, ${age});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const users = await sql`SELECT * FROM users;`;
  return NextResponse.json({ users }, { status: 200 });
}