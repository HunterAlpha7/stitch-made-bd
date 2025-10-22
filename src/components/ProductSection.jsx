import Image from "next/image";

export default function ProductSection({ title, category }) {
  // In a real application, you would fetch images based on the category
  const images = [
    `/products/${category}/image1.jpg`,
    `/products/${category}/image2.jpg`,
    `/products/${category}/image3.jpg`,
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
      <div className="flex overflow-x-auto space-x-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="flex-none w-64 h-64 relative">
            <Image
              src={src}
              alt={`${title} product ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
