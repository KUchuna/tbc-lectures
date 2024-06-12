// import { sql } from '@vercel/postgres';
// import { NextResponse, NextRequest} from 'next/server';

// export const GET = async (_: NextRequest) => {
//   try {
//     const result = await sql`DROP TABLE services;`;
//     console.log("Table Deletion Result:", result);
//     return NextResponse.json({ result }, { status: 200 });
//   } catch (error) {
//     console.error("Table Deletion Error:", error);
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
