import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const galleryDirectory = path.join(process.cwd(), 'public', 'gallery_images');
  try {
    const filenames = await fs.readdir(galleryDirectory);
    return NextResponse.json({ filenames });
  } catch (error) {
    console.error("Error reading gallery images directory:", error);
    return NextResponse.json({ error: 'Failed to read gallery images' }, { status: 500 });
  }
}
