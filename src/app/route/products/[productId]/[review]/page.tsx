import { notFound } from "next/navigation";

export default async function Reviews({
  params,
}: {
  params: Promise<{ productId: string; review: string }>;
}) {
  const { productId, review } = await params;
  if (parseInt(review) > 1000) {
    notFound();
  }
  return (
    <h2>
      details about product {productId} review {review}
    </h2>
  );
}
