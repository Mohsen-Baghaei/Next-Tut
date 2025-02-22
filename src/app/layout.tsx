import { Metadata } from "next";
import "./global.css";
export const metadata: Metadata = {
  title: {
    default: "Next.js TUT",
    template: "% | TUT",
  },
  description: "Route Handler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex justify-start items-start p-5 w-full min-h-screen rounded-xl border-2 border-solid border-gray-400 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
