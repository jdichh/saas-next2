import LandingHero from "@/components/landing-hero";
import LandingNav from "@/components/landing-nav";

export default function LandingPage() {
  return (
    <div className="h-full w-full sm:overflow-hidden">
      <LandingNav />
      <LandingHero/>
    </div>
  );
}
