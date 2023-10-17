import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { links } from "@/lib/data";

export default function LandingHero() {
  return (
    <div className="font-semibold p-2 text-center space-y-5 max-w-[1920px] mx-auto flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl sm:text-5xl space-y-5 font-extrabold">
        Harness the power of AI using{" "}
        <span className="animate-colorshift bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
          Dreamscape.
        </span>
      </h1>
      <h2 className="text-muted-foreground text-xs sm:text-base">
        Utilize advanced AI models from Replicate and OpenAI.
      </h2>
      <aside className="grid grid-cols-1 sm:grid-cols-2 max-w-[64rem] mx-auto gap-3">
        {links.map((link) => (
          <Card key={link.title}>
            <CardHeader>
              <CardTitle>{link.title}</CardTitle>
              <CardDescription>{link.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </aside>
    </div>
  );
}
