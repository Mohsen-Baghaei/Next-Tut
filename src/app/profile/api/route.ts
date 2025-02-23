import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // First Way
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  // Second Way
  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  return new Response("<h2>Profile API data</h2>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
