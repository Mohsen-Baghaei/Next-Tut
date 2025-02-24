export default function clientSideRenderingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      {children}
    </div>
  );
}
