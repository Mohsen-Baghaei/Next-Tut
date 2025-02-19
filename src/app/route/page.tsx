import Link from "next/link";
import { routeing, RouteingType } from "../../public/data/data";

export default function Home() {
  const content = routeing.map((route: RouteingType, i: number) => (
    <Link
      key={i}
      href={route.href}
      className="p-2 rounded-xl border-2 border-solid border-red-300 bg-gray-400 text-slate-800"
    >
      {route.name}
    </Link>
  ));

  return (
    <div className=" flex justify-start items-start gap-5 text-3xl flex-wrap">
      {content}
    </div>
  );
}
