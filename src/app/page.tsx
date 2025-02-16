import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-start items-start gap-5 text-3xl">
      <Link
        href="/"
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        About
      </Link>
      <Link
        href="/profile"
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        Profile
      </Link>
      <Link
        href="/blog"
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        Blog
      </Link>
    </div>
  );
}
