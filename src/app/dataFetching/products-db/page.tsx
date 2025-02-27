import { getProducts } from "@/prisma-db";

type Product = {
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
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium"></p>
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
