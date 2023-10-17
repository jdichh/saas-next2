"use client";

import Heading from "@/components/heading";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SendHorizontalIcon, VideoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as ZOD from "zod";
import { formSchema } from "./constants";

export default function VideoGenPage() {
  const router = useRouter();
  const [video, setVideo] = useState<string>();

  const form = useForm<ZOD.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const onSubmit = async (values: ZOD.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);
      const response = await axios.post("/api/video", values);
      setVideo(response.data[0]);
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
        title="Video Generation"
        description="Prank someone. Create a screamer video."
        Icon={VideoIcon}
        iconColor="text-lime-600"
        bgColor="bg-lime-50"
      />
      <div className="px-2 space-y-3 w-full max-w-4xl mx-auto pt-[10.5px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-row justify-between items-end gap-2 rounded-md border py-2 px-3 focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-muted-foreground">
                    What type of video do you want to see?
                  </FormLabel>

                  <FormControl className="m-0 py-0">
                    <Input
                      className="outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isSubmitting}
                      placeholder="Screamer video"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button disabled={isSubmitting} aria-label="submit prompt">
              <SendHorizontalIcon size={18} />
            </Button>
          </form>
        </Form>

        {isSubmitting && (
          <div className="flex items-center justify-center bg-muted p-8 rounded-lg">
            <Loader />
          </div>
        )}
        {video && (
          <video controls className="w-full mt-8">
            <source src={video} />
          </video>
        )}
      </div>
    </>
  );
}
