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
    description: "Have a chat with an AI.",
    icon: MessagesSquare,
    href: "/converse",
    bgColor: "bg-emerald-50",
    color: "text-emerald-600",
    arialabel: "converse with AI"
  },
  {
    title: "Image Generation",
    description: `Unleash your inner AI "artistry".`,
    icon: ImageIcon,
    href: "/image-generation",
    bgColor: "bg-amber-50",
    color: "text-amber-600",
    arialabel: "generate images"
  },
  {
    title: "Video Generation",
    description: "Prank someone. Create a screamer video.",
    icon: VideoIcon,
    href: "/video-generation",
    bgColor: "bg-lime-50",
    color: "text-lime-600",
    arialabel: "generate videos"
  },
  {
    title: "Audio Generation",
    description: "Be the next artist that sells their soul to a label.",
    icon: HeadphonesIcon,
    href: "/audio-generation",
    bgColor: "bg-teal-50",
    color: "text-teal-600",
    arialabel: "generate audio"
  },
  {
    title: "Pair Programmer",
    description: "Team up with an AI in programming.",
    icon: Code2Icon,
    href: "/pair-programmer",
    bgColor: "bg-sky-50",
    color: "text-sky-600",
    arialabel: "program with AI"
  },
];