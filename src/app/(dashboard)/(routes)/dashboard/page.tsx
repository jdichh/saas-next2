"use client";

import { Card } from "@/components/ui/card";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <>
      <hgroup className="mb-8 space-y-1">
        <h2 className="text-2xl font-semibold text-center md:text-3xl md:text-left">
          Utilize AI in your digital needs.
        </h2>
        <h3 className="text-muted-foreground text-center md:text-left">
          For programmers and AI "artists" alike.
        </h3>
      </hgroup>
      <div className="px-2 space-y-2 w-full max-w-4xl mx-auto">
        {links.map((link) => (
          <Card
            onClick={() => router.push(link.href)}
            key={link.href}
            aria-label={link.arialabel}
            className="flex items-center justify-between p-4 border-black/5 transition cursor-pointer hover:scale-[1.015] hover:shadow-md active:scale-[0.985]"
          >
            <div className="flex items-center gap-x-2 ">
              <div className={cn("p-2 w-fit rounded-md", link.bgColor)}>
                <link.icon className={cn("w-5 h-5", link.color)} />
              </div>
              <span className="font-medium">{link.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 transition" />
          </Card>
        ))}
      </div>
    </>
  );
}
