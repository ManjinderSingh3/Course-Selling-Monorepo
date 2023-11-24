import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@course-selling-monorepo/utils";
import React from "react";
import { Icons } from "./auth-providers-icon/icons";
import { Button } from "@course-selling-monorepo/utils";
import Link from "next/link";
import { Session } from "next-auth";

type UserProfileDropdownProps = {
  data: Session;
  initials: string | undefined;
};

export const UserProfileDropdown = ({
  data,
  initials,
}: UserProfileDropdownProps) => {};
