import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type HeadingProps = {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
};

export default function Heading({
  title,
  description,
  Icon,
  iconColor,
  bgColor,
}: HeadingProps) {
  return (
    <div className="flex items-center gap-x-2 mb-8 px-4 lg:px-8">
      <div className={cn("p-2 w-fit rounded-md", bgColor)}>
        <Icon className={cn("w-8 h-8", iconColor)} />
      </div>
      <hgroup>
        <h2 className="text-xl font-semibold">{title}</h2>
        <h3 className="text-sm text-muted-foreground">{description}</h3>
      </hgroup>
    </div>
  );
}
