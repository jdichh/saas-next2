"use client";

import { Card } from "@/components/ui/card";
import { tools } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main className="md:ml-[17rem]">
      <div className="mb-8 space-y-1">
        <h2 className="text-2xl font-semibold text-center md:text-3xl md:text-left">
          Utilize AI in your digital needs.
        </h2>
        <h3 className="text-muted-foreground text-center md:text-left">
          For programmers and AI "artists" alike.
        </h3>
      </div>
      <div className="px-2 md:px-20 lg:px-32 space-y-1">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="flex items-center justify-between p-4 border-black/5 hover:shadow-md transition cursor-pointer group"
          >
            <div className="flex items-center gap-x-2 ">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-5 h-5", tool.color)} />
              </div>
              <span className="font-medium">{tool.title}</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:scale-[1.3] transition"/>
          </Card>
        ))}
      </div>
    </main>
  );
}
