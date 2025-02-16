import Link from "next/link";

export default async function Product({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <div className="flex justify-center items-center">
      <h2>Product {productId} details</h2>
      <Link
        href={`/products/${productId}/${10}`}
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        view Reviews
      </Link>
    </div>
  );
}
