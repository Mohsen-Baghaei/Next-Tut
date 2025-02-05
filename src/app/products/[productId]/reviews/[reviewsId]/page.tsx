export default async function reviewsDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewsId: string }>;
}) {
  const { productId, reviewsId } = await params;
  return (
    <h1>
      {productId} review {reviewsId}
    </h1>
  );
}
