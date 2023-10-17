"use client";

import { EmptyChatbox } from "@/components/empty-chatbox";
import Heading from "@/components/heading";
import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Download, ImageIcon, SendHorizontalIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as ZOD from "zod";
import { amtOptions, formSchema, resolutionOptions } from "./constants";

export default function ImageGenPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<ZOD.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const onSubmit = async (values: ZOD.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("/api/image", values);
      const imgUrls = response.data.map((image: { url: string }) => image.url);
      setImages(imgUrls);
      setErrorMessage(null);
    } catch (error: any) {
      console.log(error);
      setErrorMessage("Error.");
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <Heading
        title="Image Generation"
        description={`Unleash your inner AI "artistry".`}
        Icon={ImageIcon}
        iconColor="text-amber-600"
        bgColor="bg-amber-50"
      />
      <div className="px-2 space-y-3 w-full max-w-4xl mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 rounded-md border py-2 px-3 focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl className="m-0 py-0">
                    <Input
                      className="outline-none border-0 focus-visible:ring-0 focus-visible:ring-transparent"
                      disabled={isSubmitting}
                      placeholder="An image of the most sus person in the world."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="amount"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={isSubmitting}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {amtOptions.map((options) => (
                        <SelectItem key={options.value} value={options.value}>
                          <span className="whitespace-nowrap mr-2">
                            {options.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="resolution"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Select
                    disabled={isSubmitting}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {resolutionOptions.map((options) => (
                        <SelectItem key={options.value} value={options.value}>
                          <span className="whitespace-nowrap mr-2">
                            {options.label}
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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
        {errorMessage && !isSubmitting && (
          <div className="flex items-center justify-center bg-muted p-8 rounded-lg">
            {errorMessage}
          </div>
        )}
        {images.length === 0 && !isSubmitting && (
          <EmptyChatbox label="No generated images yet." />
        )}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
          {images.map((src) => (
            <Card key={src} className="rounded-md overflow-hidden">
              <div className="relative aspect-square">
                <Image alt="image prompt" fill src={src} />
              </div>
              <CardFooter className="p-2">
                <Button
                  variant="secondary"
                  className="w-full hover:bg-slate-300/60"
                  onClick={() => window.open(src)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  <span>Download</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
