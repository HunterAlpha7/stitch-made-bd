"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ProductSection({ title, category }) {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const autoRotateIntervalRef = useRef(null);

  const itemsPerPage = 4; // 4 columns

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`/api/product-images?category=${category}`);
        const data = await response.json();
        setImages(data.filenames || []);
      } catch (error) {
        console.error(`Failed to fetch images for ${category}:`, error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [category]);

  // Auto-rotate carousel
  useEffect(() => {
    if (images.length === 0) return;

    autoRotateIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = Math.max(0, Math.ceil(images.length / itemsPerPage) - 1);
        return (prevIndex + 1) % (maxIndex + 1);
      });
    }, 5000); // Auto-rotate every 5 seconds

    return () => {
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, [images.length]);

  const maxIndex = Math.max(0, Math.ceil(images.length / itemsPerPage) - 1);
  const startIndex = currentIndex * itemsPerPage;
  const visibleImages = images.slice(startIndex, startIndex + itemsPerPage);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    // Reset auto-rotate timer when manually navigating
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
      autoRotateIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIdx = Math.max(0, Math.ceil(images.length / itemsPerPage) - 1);
          return (prevIndex + 1) % (maxIdx + 1);
        });
      }, 5000);
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (maxIndex + 1));
    // Reset auto-rotate timer when manually navigating
    if (autoRotateIntervalRef.current) {
      clearInterval(autoRotateIntervalRef.current);
      autoRotateIntervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const maxIdx = Math.max(0, Math.ceil(images.length / itemsPerPage) - 1);
          return (prevIndex + 1) % (maxIdx + 1);
        });
      }, 5000);
    }
  };

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
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">{title}</h2>
        <div className="flex justify-center">
          <p className="text-gray-600">Loading images...</p>
        </div>
      </section>
    );
  }

  if (images.length === 0) {
    return (
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">{title}</h2>
        <div className="flex justify-center">
          <p className="text-gray-600">No images available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">{title}</h2>
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Previous images"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-4 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Next images"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Image Grid - 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {visibleImages.map((filename, index) => (
            <div
              key={`${filename}-${startIndex + index}`}
              className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => handleImageClick(filename)}
            >
              <Image
                src={`/products/${category}/${filename}`}
                alt={`${title} product ${startIndex + index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
          {/* Fill empty slots if needed for consistent layout */}
          {visibleImages.length < itemsPerPage &&
            Array.from({ length: itemsPerPage - visibleImages.length }).map((_, index) => (
              <div key={`empty-${index}`} className="aspect-[4/3]" />
            ))}
        </div>

        {/* Indicator dots */}
        {maxIndex > 0 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentIndex
                  ? "bg-gray-800 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}>
          <div className="relative p-2 rounded-lg max-w-3xl max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-white w-10 h-10 flex items-center justify-center text-2xl font-bold transition-colors duration-200" style={{ textShadow: '1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black' }}>×</button>
            <Image
              src={`/products/${category}/${selectedImage}`}
              alt="Enlarged product image"
              width={900}
              height={600}
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}