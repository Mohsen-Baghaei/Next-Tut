import { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: {
    default: "Next.js TUT",
    template: "% | TUT",
  },
  description: "RENDERING",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex justify-start items-start p-5 w-full min-h-screen rounded-xl border-2 border-solid border-gray-400 overflow-x-hidden">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
