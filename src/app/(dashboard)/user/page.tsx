"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  destination: z.string().min(2, {
    message: "Travel Destination is required!.",
  }),

  location: z.string().min(2, {
    message: "Travel Location is required!.",
  }),

  password: z.string().min(2, {
    message: "Password is required!.",
  }),
});

const UserPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      location: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // Reset the form after successful submission
    form.reset();
  };

  return (
    <div className="pt-4 w-full">
      <h1 className="text-3xl font-semibold pb-4">Post Travel</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem className="w-full md:w-2/4">
                  <FormLabel>Travel Destination</FormLabel>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter travel destination"
                    {...field}
                    className="mt-1 block w-full rounded-xl border-2 border-gray-400 bg-gray-100 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
                    style={{ color: "black" }}
                  />
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="w-full md:w-2/4">
                  <FormLabel>Travel Location</FormLabel>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter travel location"
                    {...field}
                    className="mt-1 block w-full rounded-xl border-2 border-gray-400 bg-gray-100 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
                    style={{ color: "black" }}
                  />
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className="mt-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    autoComplete="off"
                    placeholder="Password"
                    {...field}
                  />
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className="border-[3px] border-black mt-6 mx-20 rounded-full" />
          <Button
            className="w-full text-white my-6 font-semibold border border-[#e44d36] hover:border-black py-5 text-lg"
            variant={"outline"}
            type="submit"
          >
            Sign In
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UserPage;
