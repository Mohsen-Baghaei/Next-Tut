"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLink = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Passwprd", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col justify-center items-start gap-4 w-full">
      <header className="flex w-full justify-center items-center p-5 rounded-lg text-5xl bg-sky-500">
        Auth Header
      </header>
      <div className="flex gap-4 justify-center items-center p-2 ">
        {navLink.map((link, i) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <Link
              key={i}
              href={link.href}
              className={`p-2 rounded-xl  border-solid  bg-gray-400 text-slate-800 ${
                isActive
                  ? "border-yellow-500 border-4 text-2xl text-white"
                  : "border-red-300 border-2"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-center">{children}</div>
      <footer className="flex w-full justify-center items-center p-5 rounded-lg text-5xl bg-red-500">
        Auth Header
      </footer>
    </div>
  );
}
