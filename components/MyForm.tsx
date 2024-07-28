"use client";
import React from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import Tiptap from "./Tiptap";
import { ArrowRight } from "lucide-react";

const MyForm = () => {
  const formSchema = z.object({
    description: z
      .string()
      .min(5, {
        message: "Description is required",
      })
      .trim(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    const output = document.getElementById("output");
    if (output) {
      output.innerHTML = data.description;
    }
  }
  return (
    <div className="my-10 w-[500px]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Tiptap description={field.value} onChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-4">
            <span>View Output</span>
            <ArrowRight className="ml-2 h5 w-5" />
          </Button>
        </form>
      </Form>
      <div
        id="output"
        className="mt-16 bg-gray-50 shadow-sm p-8 space-y-3"
      ></div>
    </div>
  );
};

export default MyForm;
