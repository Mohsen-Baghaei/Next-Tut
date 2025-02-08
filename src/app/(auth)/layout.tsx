export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <>
        <header className="bg-teal-500 p-4 text-center">Auth</header>
        {children}
        <footer className="bg-teal-500 p-4 text-center">Auth</footer>
      </>
    );
  }
  