import fs from "fs";
import { ServerComponentTwo } from "@/components/server-component-two";

export const ServerComponentOne = () => {
  fs.readFileSync("src/components/server-component-one.tsx", "utf-8");
  console.log("server");
  return (
    <div>
      <h2>Server component one</h2>
      <ServerComponentTwo />
    </div>
  );
};
