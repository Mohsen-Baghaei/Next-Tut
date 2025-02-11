import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col">
          <li className="mb-2">
            <Link href="/blog">blog</Link>.
          </li>
          <li>
            <Link href="/products">products</Link>
          </li>
          <li>
            <Link href="/articles/breaking-news-123?lang=en">
              Read in English
            </Link>
          </li>
          <li>
            <Link href="/articles/breaking-news-123?lang=fr">
              Read in French
            </Link>
          </li>
          <li>
            <Link href="/order-product">OrderProducts</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/photo-feed">Photo Feed</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
