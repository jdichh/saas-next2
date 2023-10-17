"use client";

import Heading from "@/components/heading";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { HeadphonesIcon, SendHorizontalIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as ZOD from "zod";
import { formSchema } from "./constants";

export default function AudioGenPage() {
  const router = useRouter();
  const [audio, setAudio] = useState<string>();

  const form = useForm<ZOD.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const onSubmit = async (values: ZOD.infer<typeof formSchema>) => {
    try {
      setAudio(undefined);
      const response = await axios.post("/api/audio", values);
      setAudio(response.data.audio);
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
        title="Audio Generation"
        description="Be the next artist that sells their soul to a label."
        Icon={HeadphonesIcon}
        iconColor="text-teal-600"
        bgColor="bg-teal-50"
      />
      <div className="px-2 space-y-3 w-full max-w-4xl mx-auto">
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
                      placeholder={`Cookie cutter rap "music".`}
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

        {isSubmitting && (
          <div className="flex items-center justify-center bg-muted p-8 rounded-lg">
            <Loader />
          </div>
        )}
        {audio && (
          <audio controls className="w-full mt-8"> 
            <source src={audio}/>
          </audio>
        )}
      </div>
    </>
  );
}
