export default function DashboardLayout({
  children,
  users,
  revenue,
  notification,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notification: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-screen justify-start items-start">
      <div className="w-full text-center">{children}</div>
      <div className="flex w-full h-full">
        <div className="flex w-1/2 flex-col justify-center items-center h-full">
          <div className="w-full">{users}</div>
          <div className="w-full">{revenue}</div>
        </div>
        <div className="flex w-1/2 justify-start items-center flex-1 flex-grow h-full">
          {notification}
        </div>
      </div>
    </div>
  );
}
