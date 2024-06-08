import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import UserProvider from "@/UserProvider/UserProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Trip Buddy",
  description: "trip buddy is a tavel lover website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <UserProvider>
          {children}
          <Toaster position="top-center" expand={true} richColors />
        </UserProvider>
      </body>
    </html>
  );
}
