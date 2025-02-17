import "./globals.css";
export const metadata = {
  title: "Next.js",
  description: "New Next",
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
