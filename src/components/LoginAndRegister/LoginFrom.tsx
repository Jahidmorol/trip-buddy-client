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
import { userLogin } from "@/services/userLogin";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),

  password: z.string().min(2, {
    message: "email must be at least 2 characters.",
  }),
});

const LoginComponent = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const extractTokenFromCookie = (cookieHeader: string) => {
    const tokenMatch = cookieHeader.match(/accessToken=([^;]*)/);
    return tokenMatch ? tokenMatch[1] : null;
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { userInfo, setCookieHeader } = await userLogin(values);

      const token = extractTokenFromCookie(setCookieHeader!);

      if (token) {
        localStorage.setItem("accessToken", token);
      } else {
        console.error("Token not found in cookie header");
      }

      // if (setCookieHeader) {
      //   localStorage.setItem(setCookieHeader);
      // }

      if (userInfo) {
        console.log("login page form", userInfo);
        // router.push("/dashboard");
      } else {
        // setError(res.message);
        // console.log(res?.message);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
export default LoginComponent;
