import { serverSideFunction } from "@/components/utils/server-utils";

export default function ServerRoutePage() {
  const result = serverSideFunction();

  return (
    <div>
      <h2>Server Route {result}</h2>;
    </div>
  );
}
