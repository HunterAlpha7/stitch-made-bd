import ProductSection from "@/components/ProductSection";

export default function Products() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <h1 className="text-4xl font-bold text-center my-8">Our Products</h1>
      
      <ProductSection title="Workwear" category="workwear" />
      <ProductSection title="Kids" category="kids" />
      <ProductSection title="Men's Bottom" category="mens_bottom" />
      <ProductSection title="Ladies Top" category="ladies_top" />
      <ProductSection title="Ladies Bottom" category="ladies_bottom" />
    </div>
  );
}