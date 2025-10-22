import ProductSection from "@/components/ProductSection";

export default function Products() {
  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-4xl font-bold text-center my-8">Our Products</h1>
      <ProductSection title="Work wear" category="work_wear" />
      <ProductSection title="Ladies bottom" category="ladies_bottom" />
      <ProductSection title="Men's bottom" category="mens_bottom" />
    </div>
  );
}
