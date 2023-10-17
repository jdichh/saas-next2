"use client";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RadiusIcon } from "lucide-react";

export default function LandingNav() {
  const { isSignedIn } = useAuth();

  return (
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
            <Button variant="outline" className="rounded-md">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
