import { notFound } from "next/navigation";

export default async function reviewsDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewsId: string }>;
}) {
  const { productId, reviewsId } = await params;
  if (parseInt(reviewsId) > 1000) {
    notFound();
  }
  return (
    <h1>
      {productId} review {reviewsId}
    </h1>
  );
}
