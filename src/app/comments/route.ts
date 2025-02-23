import { type NextRequest } from "next/server";
import { comments } from "./data";

// Normal Get
/* export async function GET() {
  return Response.json(comments);
} */

// Search Filter
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.text.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length ? comments[comments.length - 1].id + 1 : 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-type": "application/json" },
    status: 201,
  });
}
