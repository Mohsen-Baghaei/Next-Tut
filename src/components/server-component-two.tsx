import fs from "fs";

export const ServerComponentTwo = () => {
  fs.readFileSync("src/components/server-component-two.tsx", "utf-8");

  return <h2>Server component two</h2>;
};
