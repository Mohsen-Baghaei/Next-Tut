import { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="en">
      <ThemeProvider>
        <body className="flex justify-start items-start p-5 w-full min-h-screen rounded-xl border-2 border-solid border-gray-400 overflow-x-hidden">
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
