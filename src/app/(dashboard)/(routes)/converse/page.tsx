"use client";

import * as ZOD from "zod";
import axios from "axios";
import Heading from "@/components/heading";
import { MessagesSquare, SendHorizonalIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./constants";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function ConversePage() {
  const router = useRouter();

  const form = useForm<ZOD.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const onSubmit = async (values: ZOD.infer<typeof formSchema>) => {
    try {
      console.log(values);
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
        description="Have a chat with our advanced AI model."
        Icon={MessagesSquare}
        iconColor="text-emerald-600"
        bgColor="bg-emerald-50"
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row justify-between items-center gap-2 rounded-md border w-full py-4 px-3 md:px-6 focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="m-0 p-0">
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
      </div>
    </>
  );
}
