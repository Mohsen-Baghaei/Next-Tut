export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-start w-full ">
      <header className="bg-sky-500 text-4xl text-gray-800 p-2 w-full rounded-xl">
        Header
      </header>
      <div className="flex flex-grow justify-center items-center w-full">
        {children}
      </div>
      <footer className="bg-red-500 text-4xl text-gray-800 p-2 w-full rounded-xl">
        Footer
      </footer>
    </div>
  );
}
