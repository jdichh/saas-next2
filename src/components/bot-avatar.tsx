import { Avatar } from "@/components/ui/avatar";
import { RadiusIcon } from "lucide-react";

export function BotAvatar() {
  return (
    <Avatar className="h-8 w-8">
      <RadiusIcon size={30} />
    </Avatar>
  );
}