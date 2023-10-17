export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full overflow-auto">
      <div className="mx-auto max-w-screen w-full h-full">{children}</div>
    </main>
  );
}
