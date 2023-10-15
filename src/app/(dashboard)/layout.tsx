import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-full">
      <Sidebar />
      <Navbar />
      <main className="md:pl-[17rem]">{children}</main>
    </div>
  );
}
