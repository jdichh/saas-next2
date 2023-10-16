import { Code2Icon, HeadphonesIcon, ImageIcon, MessagesSquare, SettingsIcon, VideoIcon } from "lucide-react";

export const links = [
    {
        title: "Test Route Focused",
        icon: MessagesSquare,
        href: "/dashboard",
        color: "text-emerald-500"
    },
    {
        title: "Converse",
        icon: MessagesSquare,
        href: "/converse",
        color: "text-emerald-500"
    },
    {
        title: "Image Generation",
        icon: ImageIcon,
        href: "/image-generation",
        color: "text-amber-500"
    },
    {
        title: "Video Generation",
        icon: VideoIcon,
        href: "/vide-generation",
        color: "text-lime-500"
    },
    {
        title: "Audio Generation",
        icon: HeadphonesIcon,
        href: "/audio-generation",
        color: "text-teal-500"
    },
    {
        title: "Code Generation",
        icon: Code2Icon,
        href: "/code-generation",
        color: "text-sky-500"
    },
    {
        title: "Settings",
        icon: SettingsIcon,
        href: "/settings",
        color: "text-slate-100"
    },
]