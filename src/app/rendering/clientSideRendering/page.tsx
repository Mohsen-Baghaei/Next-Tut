import { clientSideRenderingImages } from "@/data/imageResorces";
import Image from "next/image";

export default function clientSideRendering() {
  const imageContent = clientSideRenderingImages.map((image, i) => (
    <Image
      key={i}
      src={image.src}
      alt={`${image.src}`}
      className="max-w-4xl mx-auto border-2 border-solid border-gray-300 rounded-xl"
    />
  ));
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 p-5">
      <h2>Client Side Rendering (CSR) 48</h2>
      {imageContent}
    </div>
  );
}
