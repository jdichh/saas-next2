import { CircleSlash2 } from "lucide-react";

type EmptyChatboxProps = {
  label: string;
};

export function EmptyChatbox({ label }: EmptyChatboxProps) {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <div className="flex items-center gap-2 text-muted-foreground text-sm text-center">
        <CircleSlash2 />
        <span>{label}</span>
      </div>
    </div>
  );
}
