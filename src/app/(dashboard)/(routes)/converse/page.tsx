"use client";

import * as ZOD from "zod";
import axios from "axios";
import Heading from "@/components/heading";
import { useState } from "react";
import { MessagesSquare, SendHorizonalIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EmptyChatbox } from "@/components/empty-chatbox";
import { useRouter } from "next/navigation";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";

export default function ConversePage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionMessageParam[]>([]);

  const form = useForm<ZOD.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const onSubmit = async (values: ZOD.infer<typeof formSchema>) => {
    try {
      const userPrompts: ChatCompletionMessageParam = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userPrompts];
      const response = await axios.post("/api/converse", {
        messages: newMessages,
      });

      setMessages((current) => [...current, userPrompts, response.data]);
      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };
  return (
    <>
      <Heading
        title="Conversate"
        description="Have a chat with OpenAI's GPT."
        Icon={MessagesSquare}
        iconColor="text-emerald-600"
        bgColor="bg-emerald-50"
      />
      <div className="px-4 lg:px-8 my-8 space-y-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row justify-between items-center gap-2 rounded-md border w-full py-4 px-3 md:px-6 focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="m-0 py-0">
                    <Input
                      className="outline-none border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isSubmitting}
                      placeholder="Is it true that Mark Zuckerberg is a lizard?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button className="w-full md:w-fit" disabled={isSubmitting}>
              <SendHorizonalIcon size={18} />
            </Button>
          </form>
        </Form>

        {isSubmitting && (
          <div className="flex items-center justify-center bg-muted p-8 rounded-lg">
            <Loader />
          </div>
        )}
        {messages.length === 0 && !isSubmitting && (
          <EmptyChatbox label="No conversations." />
        )}
        <div className="flex flex-col gap-y-4">
          {messages.map((message) => (
            <p
              key={message.content}
              className={cn(
                "flex items-start w-full gap-x-8 rounded-md",
                message.role === "user"
                  ? "bg-white border border-black/10"
                  : "bg-muted"
              )}
            >
              {message.content}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
