import Link from "next/link";

type Prop = {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
};

export default async function NewsArticle({ params, searchParams }: Prop) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;

  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>
      <h2>
        if we want to use it in client component we will use (use) and it is (
        const articleId = use(params))
      </h2>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
