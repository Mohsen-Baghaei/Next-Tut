import { serverSideFunction } from "@/components/utils/server-utils";
import ImageSlider from "@/components/ImageSlider";

export default function ServerRoutePage() {
  const result = serverSideFunction();

  return (
    <div>
      <h2>Server Route {result}</h2>
      <ImageSlider />
      <h2>*** Third Party Package for Server ***</h2>
      <h2>
        in default we can not use Third Party Package for Server so we have to
        write the code in another part and import it in to server component
      </h2>
    </div>
  );
}
