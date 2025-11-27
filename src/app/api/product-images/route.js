import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  if (!category) {
    return NextResponse.json({ error: 'Category parameter is required' }, { status: 400 });
  }

  const productDirectory = path.join(process.cwd(), 'public', 'products', category);
  
  try {
    const filenames = await fs.readdir(productDirectory);
    // Filter only image files and sort them
    const imageFiles = filenames
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .sort();
    
    return NextResponse.json({ filenames: imageFiles });
  } catch (error) {
    console.error(`Error reading product images directory for category ${category}:`, error);
    return NextResponse.json({ error: 'Failed to read product images' }, { status: 500 });
  }
}
