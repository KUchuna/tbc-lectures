import { list } from '@vercel/blob';
 
export const runtime = 'edge';
 
export async function GET() {
    const { blobs } = await list({ mode: 'folded', prefix: 'project-images/' });
    return Response.json({ blobs });
}