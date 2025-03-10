import ProductCard from "@/components/ProductCard";
import { getProducts } from "../../database/products";
import { db } from "@/db";

export default async function Products() {
  // const products = getProducts();

  const products = await db.products.findMany();
  // console.log(products);

  return (
    <div className="container mx-auto px-6 pt-6 pb-12">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((prod) => (
          <ProductCard product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}
