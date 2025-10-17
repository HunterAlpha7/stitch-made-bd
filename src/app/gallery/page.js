"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export default function GalleryPage() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleImageClick = (filename) => {
    setSelectedImage(filename);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

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
          <div key={index} className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            onClick={() => handleImageClick(filename)}>
            <Image
              src={`/gallery_images/${filename}`}
              alt={`Gallery image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{t("viewImage")}</p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}>
          <div className="relative p-2 rounded-lg max-w-3xl max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-white w-10 h-10 flex items-center justify-center text-2xl font-bold transition-colors duration-200" style={{ textShadow: '1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black' }}>×</button>
            <Image
              src={`/gallery_images/${selectedImage}`}
              alt="Enlarged gallery image"
              width={900}
              height={600}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
