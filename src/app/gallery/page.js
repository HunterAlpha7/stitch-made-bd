"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    async function fetchImages() {
      // In a real application, you would fetch image filenames from an API endpoint
      // For this example, we'll simulate fetching from the public directory.
      // NOTE: This approach of directly reading file system in client component is not recommended
      // and will cause issues in production. This is for demonstration purposes.
      // For a production app, create an API route to read the public/gallery_images directory.

      try {
        const response = await fetch('/api/gallery-images');
        const data = await response.json();
        setImages(data.filenames);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-center mb-8">{t("ourGallery")}</h1>
        <p>{t("loadingImages")}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{t("ourGallery")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((filename, index) => (
          <div key={index} className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={`/gallery_images/${filename}`}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{t("viewImage")}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
