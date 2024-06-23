import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (_: NextRequest) => {
  const data = await getSession();

  let auth_id, email, name, avatar, role;

  if (data) {
    auth_id = data.user.sub;
    email = data.user.email;
    name = data.user.nickname;
    avatar = data.user.picture;
    role = "user";
  }

  try {
    const res = await sql`SELECT * FROM authusers WHERE auth_id = ${auth_id}`;
    if (res.rowCount === 0) {
      const insertRes = await sql`
        INSERT INTO authusers (auth_id, email, name, avatar, role)
        VALUES (${auth_id}, ${email}, ${name}, ${avatar}, ${role})
      `;
      console.log("Insert Result:", insertRes);
    }
  } catch (err) {
    console.error("Database Error:", err);
    return NextResponse.json({ err }, { status: 500 });
  }

  return redirect('/');
}
