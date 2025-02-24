import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // ***(HEADERS)***
  // First Way
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  // Second Way
  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  // ***(COOKIES)***
  // First Way
  const theme = request.cookies.get("theme");
  console.log(theme);

  //Second Way
  const cookieStore = await cookies();
  cookieStore.set("resultsPerPage", "20");
  console.log(cookieStore.get("resultsPerPage"));

  return new Response("<h2>Profile API data</h2>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
