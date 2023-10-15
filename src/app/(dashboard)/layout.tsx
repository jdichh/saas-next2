import Navbar from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full">
      <aside>
        <ul className="hidden bg-slate-900 text-white h-full md:w-2/12 md:flex md:flex-col md:fixed md:inset-y-0 z-[100]">
          <li>test 1</li>
          <li>test 2</li>
        </ul>
      </aside>
      <Navbar />
      <main className="md:pl-[20.5rem]">
        {children}
      </main>
    </div>
  );
}
