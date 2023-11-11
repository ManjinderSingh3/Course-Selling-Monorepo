//import { Navbar } from "./navbar";
import React from "react";
import RegisterPage from "./register/register-page";
import { Navbar } from "@course-selling-monorepo/ui";

//  ---------  Currently this handler has logic of Appbar  ----------
export default function Home({ children }: React.PropsWithChildren) {
  return (
    <div>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <Navbar />
        </div>
      </header>
      <div className="">
        <RegisterPage />
      </div>
    </div>
  );
  //const session = useSession();
}
