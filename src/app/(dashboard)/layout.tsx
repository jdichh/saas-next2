import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full">
      <header className="hidden h-full md:w-64 md:flex md:flex-col md:fixed md:inset-y-0 z-[100]">
        <Sidebar />
      </header>
      <Navbar />
      <main className="md:ml-[17rem]">{children}</main>
    </div>
  );
}
