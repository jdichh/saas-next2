import { SignUp } from "@clerk/nextjs";
import ClerkNavbar from "../../clerk-navbar";

export default function Page() {
  return (
    <div className="h-full w-full">
      <ClerkNavbar />
      <div className="flex items-center justify-center h-full">
        <SignUp />
      </div>
    </div>
  );
}
