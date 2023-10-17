import { SignIn } from "@clerk/nextjs";
import ClerkNavbar from "../../clerk-navbar";

export default function Page() {
  return (
    <div className="h-full w-full">
      <ClerkNavbar />
      <main className="flex flex-col items-center justify-center h-full">
        <SignIn />
        <div className="font-sm text-center text-muted-foreground mt-8">
          <p>
            <span className="font-semibold">Gmail Address: </span>
            dreamscapedemo@gmail.com
          </p>
          <p>
            <span className="font-semibold">Password: </span>Dreamscape01
          </p>
        </div>
      </main>
    </div>
  );
}
