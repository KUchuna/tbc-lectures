import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {

  const id = request.nextUrl.pathname.replace("/api/edit-user/", "");

  if (!id) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  const { name, email, age } = await request.json();

  if (!name || !email || !age) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    await sql`
      UPDATE users SET name = ${name}, email = ${email}, age = ${age} WHERE id = ${Number(id)}`;
  } catch (error) {
    return NextResponse.json( {error}, { status: 500 });
  }
}