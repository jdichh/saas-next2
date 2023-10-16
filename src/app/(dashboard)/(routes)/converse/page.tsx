import Heading from "@/components/heading";
import { MessagesSquare } from "lucide-react";

export default function ConversePage() {
  return (
    <Heading title="Conversate" description="Have a chat with our advanced AI model." Icon={MessagesSquare} iconColor="text-emerald-600" bgColor="bg-emerald-50"/>
  )
}
