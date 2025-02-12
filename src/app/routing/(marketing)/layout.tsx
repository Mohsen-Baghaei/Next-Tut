export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-blue-500 p-4 text-center">Marketing</header>
      {children}
      <footer className="bg-blue-500 p-4 text-center">Marketing</footer>
    </>
  );
}
