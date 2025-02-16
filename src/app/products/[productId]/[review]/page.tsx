export default async function Reviews({
  params,
}: {
  params: Promise<{ productId: string; review: string }>;
}) {
  const { productId, review } = await params;
  return (
    <h2>
      details about product {productId} review {review}
    </h2>
  );
}
