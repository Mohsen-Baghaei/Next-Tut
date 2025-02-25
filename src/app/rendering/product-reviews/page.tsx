import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";

import { strimingImage } from "@/data/imageResorces";
import Image from "next/image";

export default function ProductDetailPage() {
  const imageContent = strimingImage.map((image, i) => (
    <Image
      key={i}
      src={image.src}
      alt={`${image.src}`}
      className="max-w-4xl mx-auto border-2 border-solid border-gray-300 rounded-xl"
    />
  ));
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <h2>Product detail page</h2>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
      <h2>
        striming is suspense in react (it loads h2 and then others but if we
        dont include it, it waits will all items load and then show all in once)
      </h2>
      {imageContent}
    </div>
  );
}
