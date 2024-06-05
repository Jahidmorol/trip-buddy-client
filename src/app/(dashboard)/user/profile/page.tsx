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

import { useContext, useState, useEffect } from "react";
import { UserContext } from "@/UserProvider/UserProvider";
import { updateUserDetails } from "@/services/homeDataFetching";
import LoadingComponent from "@/components/Loading/Loading";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),

  username: z.string().min(2, {
    message: "User name must be at least 2 characters.",
  }),
});

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const userContext = useContext(UserContext);

  // Define default values unconditionally
  const defaultValues = {
    email: userContext?.data?.email || "",
    username: userContext?.data?.name || "",
  };

  // Initialize the form with default values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const email = form.watch("email");
  const name = form.watch("username");

  // Use effect to reset the form when userContext.data changes
  useEffect(() => {
    if (userContext?.data) {
      form.reset({
        email: userContext.data.email,
        username: userContext.data.name,
      });
    }
  }, [userContext?.data, form]);

  useEffect(() => {
    const userNameRegex = /^[a-zA-Z0-9_]+$/;
    if (name && !userNameRegex.test(name)) {
      form.setError("username", {
        type: "manual",
        message:
          "Invalid user name. Only letters, numbers, and underscores are allowed.",
      });
    } else {
      form.clearErrors("username");
    }
  }, [name, form]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      form.setError("email", {
        type: "manual",
        message: "Invalid email address.",
      });
    } else {
      form.clearErrors("email");
    }
  }, [email, form]);

  // Check for userContext and its values after defining hooks
  if (!userContext) {
    return null;
  }

  const { setRefetch } = userContext;

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ): Promise<void> => {
    setIsLoading(true);
    const toastId = toast.loading("Updating...");

    try {
      const userData = {
        name: values.username,
        email: values.email,
      };

      await updateUserDetails(userData);

      toast.success("Your information updated successfully", { id: toastId });
      setRefetch(true);
      setIsLoading(false);
    } catch (err: any) {
      toast.error(err?.message, { id: toastId });
      setIsLoading(false);
    }
  };

  if (userContext.isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div className="mt-10 w-full">
      <div className="flex justify-between items-center pb-8 w-full">
        <h1 className="text-3xl font-semibold">Change your information</h1>
        <Link
          className="text-primaryColor underline text-lg hover:text-blue-600 transition-all"
          href={"/"}
        >
          Back To Home
        </Link>
      </div>
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
                  <FormItem className="md:w-[500px]">
                    <FormLabel>Your User Name</FormLabel>
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
            <div className="border-[3px] md:w-[500px] border-black mt-6  rounded-full" />
            <Button
              className="md:w-[500px] rounded-xl text-white my-6 font-semibold border border-[#e44d36] hover:border-black py-5 text-lg hover:bg-white hover:text-black"
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
