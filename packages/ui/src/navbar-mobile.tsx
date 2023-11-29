"use client";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@course-selling-monorepo/utils";
import { useState } from "react";
import Link from "next/link";
import { COURSE_CATEGORIES_LIST } from "./navbar-course-categories";
import { NAVBAR_ITEMS } from "./navbar-items";
import { useSession } from "next-auth/react";

export function NavbarMobile() {
  const session = useSession();
  const [open, setOpen] = useState<boolean>(false);
  const [openCourseCategories, setOpenCourseCategories] =
    useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "lg:hidden fixed right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 ",
          open && "hover:bg-white active:bg-gray-200"
        )}
      >
        {open ? (
          <X className="h-5 w-5 text-gray-600" />
        ) : (
          <Menu className="h-5 w-5 text-gray-600" />
        )}
      </button>
      <nav
        className={cn(
          "fixed inset-0 z-20 hidden w-full px-5 py-16 lg:hidden",
          open && "block"
        )}
      >
        <ul className="grid divide-y divide-gray-200">
          <li className="py-3">
            <button
              className="flex w-full justify-between"
              onClick={() => setOpenCourseCategories(!openCourseCategories)}
            >
              <p className="font-semibold">Course Categories</p>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-gray-500 transition-all",
                  openCourseCategories && "rotate-180"
                )}
              />
            </button>
            {openCourseCategories && (
              <div className="grid gap-4 overflow-hidden py-4">
                {COURSE_CATEGORIES_LIST.map(
                  ({ slug, icon: Icon, shortTitle }) => (
                    <Link
                      key={slug}
                      href="/"
                      onClick={() => setOpen(false)}
                      className="flex w-full space-x-2"
                    >
                      <Icon className="h-5 w-5 text-gray-500" />
                      <span className="text-sm">{shortTitle}</span>
                    </Link>
                  )
                )}
              </div>
            )}
          </li>
          {NAVBAR_ITEMS.map(({ name, slug }) => (
            <li key={slug} className="py-3">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex w-full font-semibold capitalize"
              >
                {name}
              </Link>
            </li>
          ))}

          {session.data?.user ? (
            <li className="py-3">
              <Link href="/" className="flex w-full font-semibold capitalize">
                User Profile
              </Link>
            </li>
          ) : (
            <>
              <li className="py-3">
                <Link
                  href={`/sign-in`}
                  className="flex w-full font-semibold capitalize"
                >
                  Sign in
                </Link>
              </li>

              <li className="py-3">
                <Link
                  href={`/sign-up`}
                  className="flex w-full font-semibold capitalize"
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
