import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h2>Blog Page</h2>
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
