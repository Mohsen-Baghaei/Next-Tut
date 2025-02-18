import Link from "next/link";

export default async function BlogPage() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });

  return (
    <div>
      <h2>Blog Page</h2>
      <h2>For loading check loading.tsx in root level</h2>
      <p>you can create specific loading for eatch route</p>
      <div className="flex justify-start items-start gap-4">
        <Link
          href="/blog/first"
          className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
        >
          First Page
        </Link>
        <Link
          href="/blog/second"
          className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
        >
          Second Page
        </Link>
      </div>
    </div>
  );
}
