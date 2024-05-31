"use client";
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

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),

  username: z.string().min(2, {
    message: "user name must be at least 2 characters.",
  }),
});

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "fo54@gmail.com",
      username: "12134567890",
    },
  });

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ): Promise<void> => {
    setIsLoading(true);
    const toastId = toast.loading("login...");

    try {
      console.log("data", values);
      toast.success("your information update success", { id: toastId });
    } catch (err: any) {
      toast.error(err?.message, { id: toastId });
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-semibold pb-4">Change your information</h1>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="md:w-[500px]">
                  <FormLabel>Your Email</FormLabel>
                  <Input
                    type="text"
                    autoComplete="off"
                    className="rounded-[10px] bg-white text-black border-gray-400"
                    placeholder="Enter your email"
                    {...field}
                  />
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
            <div className="mt-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your user name</FormLabel>
                    <Input
                      type="text"
                      autoComplete="off"
                      className="rounded-[10px] bg-white text-black border-gray-400"
                      placeholder="User Name"
                      {...field}
                    />
                    <FormMessage className="text-red-600" />
                  </FormItem>
                )}
              />
            </div>
            <div className="border-[3px] border-black mt-6 mx-20 rounded-full" />
            <Button
              className="w-full text-white my-6 font-semibold border border-[#e44d36] hover:border-black py-5 text-lg hover:bg-white hover:text-black"
              variant={"outline"}
              type="submit"
            >
              {isLoading ? "Loading..." : "Change"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default UserProfile;
