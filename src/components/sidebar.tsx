"use client";

import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { RadiusIcon } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <nav className="flex flex-col h-full space-y-4 p-4 text-white bg-slate-900">
      <Link href="/dashboard">
        <h1 className="flex flex-row items-center justify-center gap-1 font-semibold hover:text-violet-400 group transition">
          <RadiusIcon className="group-hover:text-violet-400 transition" size={30}/>
          dreamscape
        </h1>
      </Link>
      <ul className="space-y-2 pt-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              key={link.href}
              className={cn(
                "flex group p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-md transition ease-in-out",
                pathName === link.href ? "bg-white/10 outline outline-1" : ""
              )}
            >
              <div className="flex items-center gap-x-2">
                <link.icon className={cn("h-5 w-5", link.color)} /> {link.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
