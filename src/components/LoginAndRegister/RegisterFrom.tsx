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
  userName: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),

  password: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
});

const RegisterComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      userName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="userName"
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
          <div className="border-[3px] border-black mt-6 mx-20 rounded-full" />
          <Button
            className="w-full text-white font-semibold my-6 border border-[#e44d36] hover:border-black py-5 text-lg"
            variant={"outline"}
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </Form>
    </div>
  );
};
export default RegisterComponent;