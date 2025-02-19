import Link from "next/link";

export default async function NewsArticle({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const articleId = (await params).articleId;
  const lang = (await searchParams).lang;
  return (
    <div>
      <h2>News article {articleId}</h2>
      <p>reading in {lang}</p>
      <div className="flex flex-col justify-center items-center gap-4">
        <Link
          href={`/articles/${articleId}?lang=en`}
          className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
        >
          English
        </Link>
        <Link
          href={`/articles/${articleId}?lang=es`}
          className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
        >
          Spanish
        </Link>
        <Link
          href={`/articles/${articleId}?lang=fr`}
          className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
        >
          French
        </Link>
      </div>
      <p className="text-2xl mb-5">
        params is a promise that resolve to an object containing the dynamic
        route parameters (like id)
      </p>
      <p className="text-2xl">
        searchParams is a promise that resolve to an object containing the query
        parameters (like filters and sorting)
      </p>
    </div>
  );
}
