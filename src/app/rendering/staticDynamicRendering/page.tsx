import { staticDynamicRenderingImages } from "@/data/imageResorces";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function staticDynamicRendering() {
  const imageContent = staticDynamicRenderingImages.map((image, i) => (
    <Image
      key={i}
      src={image.src}
      alt={`${image.src}`}
      className="max-w-4xl mx-auto border-2 border-solid border-gray-300 rounded-xl"
    />
  ));

  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 p-5">
      <h2>(Static / Dynamic ) Rendering</h2>
      <h2>Check the COMPONENT for Codes</h2>
      {imageContent}
    </div>
  );
}
