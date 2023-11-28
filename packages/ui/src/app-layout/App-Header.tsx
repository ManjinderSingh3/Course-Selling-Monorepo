import React, { Suspense } from "react";
import { Navbar } from "../navbar";
import { cn, Skeleton, buttonVariants } from "@course-selling-monorepo/utils";
import { NavbarMobile } from "../navbar-mobile";
import { ModeToggle } from "../theme-toggle";

export const AppHeader = async ({ children }: React.PropsWithChildren) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Navbar />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Suspense
              fallback={
                <Skeleton
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full bg-muted text-muted-foreground"
                  )}
                >
                  Loading...
                </Skeleton>
              }
            >
              {children}
            </Suspense>
          </nav>
        </div>
        <ModeToggle />
        <NavbarMobile />
      </div>
    </header>
  );
};
