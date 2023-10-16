import { RadiusIcon } from "lucide-react";

export function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-y-2">
        <div className="relative animate-spin">
            <RadiusIcon size={30}/>
        </div>
        <span className="text-sm text-muted-foreground">Generating response...</span>
    </div>
  )
}
