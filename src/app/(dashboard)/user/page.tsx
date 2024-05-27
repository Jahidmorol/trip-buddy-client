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

// Define your Zod schema
const formSchema = z.object({
  destination: z.string().min(2, {
    message: "Travel Destination is required!.",
  }),
  title: z.string().min(2, {
    message: "Travel title is required!.",
  }),
  location: z.string().min(2, {
    message: "Travel Location is required!.",
  }),
  password: z.string().min(2, {
    message: "Password is required!.",
  }),
  startDate: z
    .string()
    .min(1, {
      message: "Start Date is required!.",
    })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
  endDate: z
    .string()
    .min(1, {
      message: "End Date is required!.",
    })
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid date format",
    }),
});

// Initialize the default date variable
const currentDateString = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

const UserPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destination: "",
      title: "",
      location: "",
      password: "",
      startDate: currentDateString,
      endDate: currentDateString,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form Values:", values);
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
              name="title"
              render={({ field }) => (
                <FormItem className="w-full md:w-2/4">
                  <FormLabel>Travel Title</FormLabel>
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter travel title"
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
          </div>
          <div className="flex mt-4 flex-col md:flex-row justify-between items-center gap-4">
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="w-full md:w-2/4">
                  <FormLabel>Travel Start Date</FormLabel>
                  <input
                    type="date"
                    autoComplete="off"
                    placeholder="Enter travel start date"
                    {...field}
                    className="mt-1 block w-full rounded-xl border-2 border-gray-400 bg-gray-100 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
                    style={{ color: "black" }}
                    value={field.value || currentDateString} // Ensure value is a string
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem className="w-full md:w-2/4">
                  <FormLabel>Travel End Date</FormLabel>
                  <input
                    type="date"
                    autoComplete="off"
                    placeholder="Enter travel end date"
                    {...field}
                    className="mt-1 block w-full rounded-xl border-2 border-gray-400 bg-gray-100 p-3 shadow-sm placeholder:font-semibold placeholder:text-black/60 focus:border-[#e44d36] focus:outline-none focus:!text-primaryColor focus:font-semibold focus:ring-1 focus:ring-[#e44d36] sm:text-sm"
                    style={{ color: "black" }}
                    value={field.value || currentDateString} // Ensure value is a string
                    onChange={(e) => field.onChange(e.target.value)}
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
