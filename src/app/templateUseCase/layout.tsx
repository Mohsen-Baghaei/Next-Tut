export default function TemplateUseCaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex justify-start items-start">
      {children}
    </div>
  );
}
