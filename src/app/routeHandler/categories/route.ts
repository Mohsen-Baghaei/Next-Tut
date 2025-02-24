// it makes app do not cashing
export const dynamic = "force-static";

export async function GET() {
  const categories = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "Books" },
    { id: 3, name: "Clothing" },
    { id: 4, name: "Home & garden" },
  ];
  return Response.json(categories);
}
