"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@clerk/nextjs";
import { RadiusIcon } from "lucide-react";
import Link from "next/link";

export default function LandingNav() {
  const { isSignedIn } = useAuth();

  return (
    <header>
      <nav className=" text-white bg-slate-900 p-4">
        <div className="max-w-[1920px] mx-auto flex justify-between items-center">
          <Link href="/">
            <h2
              className="flex flex-row items-center gap-1 font-semibold hover:text-violet-400 group transition"
              aria-label="dreamscape logo"
            >
              <RadiusIcon
                className="group-hover:text-violet-400 transition"
                size={30}
              />
              dreamscape
            </h2>
          </Link>
          <div className="flex items-center gap-x-2 text-black">
            <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
              <Button
                variant="outline"
                className="rounded-md hover:bg-violet-500 hover:scale-[1.05] active:scale-[0.95] transition border-none"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
