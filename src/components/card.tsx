export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-24 m-3 shadow-2xl border border-solid border-orange-500 flex justify-center items-center rounded-lg">
      {children}
    </div>
  );
};
