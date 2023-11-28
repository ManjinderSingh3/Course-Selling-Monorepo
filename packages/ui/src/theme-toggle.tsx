"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@course-selling-monorepo/utils";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="hidden lg:block w-8 h-8"
        >
          {/* <div className="items-center justify-center place-items-center"> */}
            <Sun className="h-[1.2rem] w-[1.1rem] mt-1.5 ml-1.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
            <Moon className="absolute h-[1.2rem] w-[1.1rem] scale-0 dark:scale-100 "/>
            {/* <Moon className="h-[1.2rem] w-[1.1rem] mb-8 scale-0 transition-all dark:rotate-0 dark:scale-100" /> */}
            <span className="sr-only">Toggle theme</span>
          {/* </div> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
