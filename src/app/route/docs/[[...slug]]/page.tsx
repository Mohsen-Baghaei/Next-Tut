import Link from "next/link";

export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h2>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h2>
    );
  } else if (slug?.length === 1) {
    return <h2>Viewing docs for feature {slug[0]}</h2>;
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2>Docs home page</h2>
      <Link
        href="/route/docs/routing"
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        one params
      </Link>
      <Link
        href="/route/docs/routing/catch-all-segment"
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        two params
      </Link>
    </div>
  );
}
