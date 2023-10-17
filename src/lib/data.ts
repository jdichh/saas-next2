import {
  Code2Icon,
  HeadphonesIcon,
  ImageIcon,
  MessagesSquare,
  VideoIcon,
} from "lucide-react";

export const links = [
  {
    title: "Converse",
    icon: MessagesSquare,
    href: "/converse",
    bgColor: "bg-emerald-50",
    color: "text-emerald-600",
  },
  {
    title: "Image Generation",
    icon: ImageIcon,
    href: "/image-generation",
    bgColor: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    title: "Video Generation",
    icon: VideoIcon,
    href: "/video-generation",
    bgColor: "bg-lime-50",
    color: "text-lime-600",
  },
  {
    title: "Audio Generation",
    icon: HeadphonesIcon,
    href: "/audio-generation",
    bgColor: "bg-teal-50",
    color: "text-teal-600",
  },
  {
    title: "Code Generation",
    icon: Code2Icon,
    href: "/code-generation",
    bgColor: "bg-sky-50",
    color: "text-sky-600",
  },
];