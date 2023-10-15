"use client";

import Link from "next/link";

import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { RadiusIcon } from "lucide-react";

export default function Sidebar() {
  return (
    <aside>
      <div className="hidden bg-slate-900 text-white h-full md:w-64 md:flex md:flex-col md:fixed md:inset-y-0 z-[100]">
        <div className="flex flex-col h-full space-y-4 p-4 text-white">
          <Link href="/dashboard">
            <h1 className="hidden md:flex md:flex-row md:items-center md:justify-center gap-1 font-semibold hover:text-sky-400 group transition">
              <RadiusIcon className="group-hover:text-sky-400 transition h-8 w-8"/>
              dreamscape
            </h1>
          </Link>
          <ul className="space-y-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} key={link.href} className="flex group p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-md transition ease-in-out">
                  <div className="flex items-center gap-2">
                    <link.icon className={cn("h-5 w-5", link.color)} /> {link.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
