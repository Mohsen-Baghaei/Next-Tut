import Link from "next/link";

export default function F1() {
  return (
    <div className="flex flex-col gap-4">
      <h2>F1 Page</h2>
      <Link
        href="/route/f1/f2"
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        F2 Page (same level page)
      </Link>
      <Link
        href="/route/f3"
        className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
      >
        F2 Page (one lavel above page)
      </Link>
    </div>
  );
}
