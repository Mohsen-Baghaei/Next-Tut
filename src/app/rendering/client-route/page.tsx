"use client";

import { clientSideFunction } from "@/components/utils/client-utils";
//import { serverSideFunction } from "@/components/utils/server-utils";
import { serverOnlyImage } from "@/data/imageResorces";
import Image from "next/image";

export default function ClientRoutePage() {
  const imageContent = serverOnlyImage.map((image, i) => (
    <Image
      key={i}
      src={image.src}
      alt={`${image.src}`}
      className="max-w-4xl mx-auto border-2 border-solid border-gray-300 rounded-xl"
    />
  ));

  //const result = serverSideFunction();

  const result2 = clientSideFunction();

  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 p-5">
      <h2>Client Route {/* {result} */}</h2>
      {imageContent}
      <h2>
        *** if we uncomment the codes in client-route we get error and page do
        not render ***
      </h2>
      <h2>*** check server-route for rendered code ***</h2>
      <h2>*** ceeck src/components/utils/server-utils.ts for code ***</h2>
      <h2>in summary:</h2>
      <h2>
        1- if we have code in server that we dont want to show in client
        component we user server-only package{" "}
      </h2>
      <h2>
        2- and if somehow data want to show in client component, the component
        will not rendered
      </h2>
      <h2>*** / / / / / / / / / / / / / / / / / / / / ***</h2>
      <p>{result2}</p>
      <h2>
        *** if we use codes in server-route we get error and page do not render
        ***
      </h2>
      <h2>in summary:</h2>
      <h2>
        1- if we have code in client that we dont want to show in server
        component we user client-only package{" "}
      </h2>
      <h2>
        2- and if somehow data want to show in server component, the component
        will not rendered
      </h2>
      <h2>*** ceeck src/components/utils/client-utils.ts for code ***</h2>
    </div>
  );
}
