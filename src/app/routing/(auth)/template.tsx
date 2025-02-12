"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent, useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <header className="bg-teal-500 p-4 text-center">Auth</header>
      <input
        type="text"
        value={input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      {navLinks.map((link) => {
        const isActive =
          pathname === link.href ||
          (pathname.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            href={link.href}
            key={link.name}
            className={
              isActive ? "font-bold mr-5 text-4xl" : "text-red-600 mr-5"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
      <footer className="bg-teal-500 p-4 text-center">Auth</footer>
    </>
  );
}
