import React from "react";
import RegisterPage from "./register/register-page";

import { TempNavbar } from "./ui-package-temp/navbar-shadcn";
import { Navbar } from "@course-selling-monorepo/ui/src/navbar";
import { Button } from "./utils-package-temp/shadcn-components/button";
//import {Button} from "@course-selling-monorepo/utils"

//  ---------  Currently this handler has logic of Appbar  ----------
export default function Home({ children }: React.PropsWithChildren) {
  return (
    <div>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <TempNavbar/>
        </div>
      </header>
      <div className="flex">
        <RegisterPage />
      </div>
    </div>
  );
  //const session = useSession();
}
