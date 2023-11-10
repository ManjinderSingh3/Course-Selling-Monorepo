import { Navbar } from "./navbar";
import React, { Suspense } from "react";
import { ShadcnNav } from "./shadcn-nav-menu";
import { Skeleton } from "@course-selling-monorepo/utils";
import { cn } from "@course-selling-monorepo/utils/src/index";
import { buttonVariants } from "@course-selling-monorepo/utils";

//  ---------  Currently this handler has logic of Appbar  ----------
export default function Home({ children }: React.PropsWithChildren) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <ShadcnNav />
      </div>
    </header>
  );
  //const session = useSession();
}
