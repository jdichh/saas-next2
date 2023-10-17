import { SignUp } from "@clerk/nextjs";
import ClerkNavbar from "../../clerk-navbar";

export default function Page() {
  return (
    <div className="h-full w-full">
      <ClerkNavbar />
      <main className="flex items-center justify-center h-full">
        <SignUp />
      </main>
    </div>
  );
}
