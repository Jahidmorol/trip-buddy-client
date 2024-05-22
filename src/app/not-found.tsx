import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      NotFoundPage
      <br />
      <Link href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
