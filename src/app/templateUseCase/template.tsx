export default function TemplateUseCaseTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-start items-start">{children}</div>
  );
}
