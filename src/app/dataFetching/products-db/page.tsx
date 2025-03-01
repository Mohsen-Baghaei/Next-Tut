import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

export default async function ProductsDBPage() {
  const products: Product[] = await getProducts();

  return (
    <ul className="space-y-4 w-full">
      {products.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-slate-200 shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/dataFetching/products-db/${product.id}`}>
              {product.title}
            </Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">{product.price}</p>
          <form action={removeProduct.bind(null, product.id)}>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </form>
        </li>
      ))}
      <h2>for code check prisma folder</h2>
      <h2>for code check src/prisma-db.ts</h2>
      <h2>npm i prisma -D</h2>
      <h2>npx prisma init --datasource-provider sqlite</h2>
      <h2>npx prisma migrate dev --name init</h2>
    </ul>
  );
}
