"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pataname = usePathname();

  const productId = pataname.split("/")[3];
  const reviewId = pataname.split("/")[4];

  return (
    <div>
      <h2>
        Review {reviewId} Not Found for product {productId}
      </h2>
      <p>this is in routing level and more specific</p>
    </div>
  );
}
