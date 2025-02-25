import Link from "next/link";
import { generateDynamicParamsImages } from "@/data/imageResorces";
import Image from "next/image";

export default function ProductsPage() {
  const imageContent = generateDynamicParamsImages.map((image, i) => (
    <Image
      key={i}
      src={image.src}
      alt={`${image.src}`}
      className="max-w-4xl mx-auto border-2 border-solid border-gray-300 rounded-xl"
    />
  ));
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <h2>
        generateStaticParams in sub folder creates static pages and it is good
        for performanc /// and dynamicParams have 2 value true or false
      </h2>
      <Link href="/rendering/products/1">Product 1</Link>
      <Link href="/rendering/products/2">Product 2</Link>
      <Link href="/rendering/products/3">Product 3</Link>
      {imageContent}
    </div>
  );
}
