import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div>
      <h1>landing page</h1>
      <div>
        <Link href="/sign-in">
          <Button>
            Sign In
          </Button>
        </Link>
        <Link href="/sign-up">
          <Button variant="outline">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}
