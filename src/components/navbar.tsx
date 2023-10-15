import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center p-4">
      <div className="flex w-full justify-start md:justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
    </header>
  );
}
