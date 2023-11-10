import * as React from "react";
import { cn } from "@course-selling-monorepo/utils/src/index";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { COURSE_CATEGORIES_LIST } from "./course-categories";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

export function ShadcnNav() {
  return (
    
    <div className="flex h-14 items-center justify-between">
      <div className="flex items-center space-x-4">
        <NavigationMenuPrimitive.Root
          delayDuration={0}
          className="relative hidden lg:block"
        >
          <NavigationMenuPrimitive.List className="flex flex-row space-x-2 p-4">
            <NavigationMenuPrimitive.Item>
              <NavigationMenuPrimitive.Trigger className="group flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-100 focus:outline-none">
                <p
                  className={cn(
                    "text-sm font-medium text-gray-500 transition-colors ease-out group-hover:text-black"
                  )}
                >
                  Categories
                </p>
                <ChevronDown className="h-4 w-4 transition-all group-data-[state=open]:rotate-180" />
              </NavigationMenuPrimitive.Trigger>
              <NavigationMenuPrimitive.Content>
                <div className="grid w-[32rem] grid-cols-2 gap-1 p-3">
                  {COURSE_CATEGORIES_LIST.map(
                    ({ slug, icon: Icon, title, shortTitle }) => (
                      <Link
                        key={slug}
                        href="/"
                        className="rounded-lg p-3 transition-colors hover:bg-gray-100 active:bg-gray-200"
                      >
                        <div className="flex items-center space-x-2">
                          <Icon className="h-4 w-4 text-gray-700" />
                          <p className="text-sm font-medium text-gray-700">
                            {shortTitle}
                          </p>
                        </div>
                        <p className="mt-1 line-clamp-1 text-sm text-gray-500">
                          {title}
                        </p>
                      </Link>
                    )
                  )}
                </div>
              </NavigationMenuPrimitive.Content>
            </NavigationMenuPrimitive.Item>

            <NavigationMenuPrimitive.Item>
              <Link
                href="/"
                className={cn(
                  " flex space-x-2 rounded-md px-3 py-2 hover:bg-gray-100 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black "
                )}
              >
                Courses
              </Link>
            </NavigationMenuPrimitive.Item>
          </NavigationMenuPrimitive.List>
          <NavigationMenuPrimitive.Viewport className="data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content absolute left-0 top-full flex w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] justify-start rounded-lg border border-gray-200 bg-white shadow-lg" />
        </NavigationMenuPrimitive.Root>
      </div>

      <div className="hidden lg:block">
        <Link
          href="/"
          className="animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 transition-colors ease-out hover:text-black"
        >
          Log in
        </Link>
        <Link
          href="/"
          className="animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
