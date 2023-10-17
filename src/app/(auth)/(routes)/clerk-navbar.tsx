import { RadiusIcon } from "lucide-react";
import Link from "next/link";

export default function ClerkNavbar() {

  return (
    <nav className=" text-white bg-slate-900 p-4">
      <div className="max-w-[1920px] mx-auto flex justify-center items-center">
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
      </div>
    </nav>
  );
}
