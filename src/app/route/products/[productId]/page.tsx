import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: Promise<{ productId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `product ${id}`,
  };
};

export default async function Product({ params }: Props) {
  const productId = (await params).productId;
  return (
    <div className="flex justify-center items-center">
      <h2>Product {productId} details</h2>
      <Link
        href={`/route/products/${productId}/${10}`}
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        view Reviews
      </Link>
    </div>
  );
}
