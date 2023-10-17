"use client";

import { BotAvatar } from "@/components/bot-avatar";
import { EmptyChatbox } from "@/components/empty-chatbox";
import Heading from "@/components/heading";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserAvatar } from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Code2Icon, SendHorizontalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";
import * as ZOD from "zod";
import { formSchema } from "./constants";

export default function CodeGenPage() {
  const lastMessage = useRef<HTMLDivElement | null>(null);
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
      const response = await axios.post("/api/code", {
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

  useEffect(() => {
    if (lastMessage.current) {
      setTimeout(() => {
        lastMessage.current?.scrollIntoView({ behavior: "smooth" });
      }, 0);
    }
  }, [messages]);

  return (
    <>
      <Heading
        title="Code Generation"
        description="Team up with an AI in programming."
        Icon={Code2Icon}
        iconColor="text-sky-600"
        bgColor="bg-sky-50"
      />
      <div className="px-2 space-y-3 w-full max-w-4xl mx-auto">
        <div className="flex flex-col gap-y-4">
          {messages.map((message) => (
            <div
              key={message.content}
              className={cn(
                "flex items-start w-full gap-x-4 rounded-md p-4",
                message.role === "user"
                  ? "bg-white border border-black/10 flex items-center"
                  : "bg-muted flex items-center flex-row-reverse"
              )}
            >
              {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
              <ReactMarkdown
                className="flex flex-col text-sm overflow-hidden leading-relaxed"
                components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 bg-slate-300/25 p-2 rounded-md">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code
                      className="overflow-auto w-full my-2 bg-slate-300/25 p-1 rounded-md"
                      {...props}
                    />
                  ),
                }}
              >
                {message.content || ""}
              </ReactMarkdown>
            </div>
          ))}
          <div className="scroll-mb-[100rem]" ref={lastMessage} />
        </div>

        {isSubmitting && (
          <div className="flex items-center justify-center bg-muted p-8 rounded-lg">
            <Loader />
          </div>
        )}

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-row justify-between items-center gap-2 rounded-md border py-2 px-3 focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="m-0 py-0">
                    <Input
                      className="outline-none border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isSubmitting}
                      placeholder="How do I center a div?"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting}>
              <SendHorizontalIcon size={18} />
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
}
