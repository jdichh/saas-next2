import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function LandingHero() {
  return (
    <div className="font-semibold p-2 text-center space-y-5 max-w-[1920px] mx-auto py-52">
      <h1 className="text-4xl sm:text-5xl space-y-5 font-extrabold">
        Harness the power of AI using{" "}
        <span className="animate-colorshift bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent">
          Dreamscape.
        </span>
      </h1>
      <h2 className="text-muted-foreground">
        Utilize advanced AI models from Replicate and OpenAI.
      </h2>
      <aside className="grid grid-cols-1 sm:grid-cols-2 max-w-[64rem] mx-auto gap-3">
        <Card>
          <CardHeader>
            <CardTitle>Conversations</CardTitle>
            <CardDescription>Have a chat with an AI.</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Image Generation</CardTitle>
            <CardDescription>Unleash your inner AI "artistry".</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Video Generation</CardTitle>
            <CardDescription>
              Prank someone. Create a screamer video.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Audio Generation</CardTitle>
            <CardDescription>
              Be the next artist that sells their soul to a label.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pair Programmer</CardTitle>
            <CardDescription>Team up with AI in programming.</CardDescription>
          </CardHeader>
        </Card>
      </aside>
    </div>
  );
}
