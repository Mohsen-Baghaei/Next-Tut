import Link from "next/link";

export default function Products() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1>Products</h1>
      <Link
        href={`/products/${1}`}
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        Product 1
      </Link>
      <Link
        href={`/products/${2}`}
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        Product 2
      </Link>
      <Link
        href={`/products/${3}`}
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        Product 3
      </Link>
    </div>
  );
}
