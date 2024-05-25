"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { userRegister } from "@/services/userRegister";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    name: z.string().min(2, {
      message: "User name must be at least 2 characters.",
    }),
    email: z
      .string()
      .min(2, {
        message: "Email is required",
      })
      .email({ message: "Invalid email address." }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
    confirmPassword: z.string().min(2, {
      message: "Provide Confirm Password.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });

  // Watch the values of the fields
  const name = form.watch("name");
  const email = form.watch("email");
  const password = form.watch("password");
  const confirmPassword = form.watch("confirmPassword");

  useEffect(() => {
    const userNameRegex = /^[a-zA-Z0-9_]+$/;
    if (name && !userNameRegex.test(name)) {
      form.setError("name", {
        type: "manual",
        message:
          "Invalid user name. Only letters, numbers, and underscores are allowed",
      });
    } else {
      form.clearErrors("name");
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

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      form.setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match.",
      });
    } else {
      form.clearErrors("confirmPassword");
    }
  }, [password, confirmPassword, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const toastId = toast.loading("Creating account...");

    try {
      const data = await userRegister(values);

      if (data?.success) {
        toast.success("Create account successfully!", { id: toastId });

        router.push("/");

        setIsLoading(false);
      } else {
        toast.error(data?.errorDetails?.error, { id: toastId });
        setIsLoading(false);
      }
    } catch (error: any) {
      toast.error(error, { id: toastId });
      setIsLoading(false);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Name</FormLabel>
                <Input
                  type="text"
                  autoComplete="off"
                  placeholder="Enter your user name"
                  {...field}
                />
                <FormMessage className="text-red-600" />
              </FormItem>
            )}
          />
          <div className="mt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your email"
                    {...field}
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
          <div className="mt-4">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    type="password"
                    autoComplete="off"
                    placeholder="Confirm password"
                    {...field}
                  />
                  <FormMessage className="text-red-600" />
                </FormItem>
              )}
            />
          </div>
          <div className="border-[3px] border-black mt-6 mx-20 rounded-full" />
          <Button
            className="w-full text-white font-semibold my-6 border border-[#e44d36] hover:border-black py-5 text-lg"
            variant={"outline"}
            type="submit"
          >
            {isLoading ? "Loading..." : "Sign Up"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default RegisterPage;
