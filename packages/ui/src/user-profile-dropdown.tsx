import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@course-selling-monorepo/utils";
import { Icons } from "./auth-providers-icon/icons";
import { Button } from "@course-selling-monorepo/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@course-selling-monorepo/utils";
import Link from "next/link";
import { Session } from "next-auth";

type UserProfileDropdownProps = {
  data?: Session;
  email?: string;
  initials: string | undefined;
};

export const UserProfileDropdown = ({
  data,
  email,
  initials,
}: UserProfileDropdownProps) => {
  return (
    <>
      {data ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"secondary"}
              className="relative h-8 w-8 rounded-full mb-1.5"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src={data.user?.image as string}
                  alt={data.user?.name ?? ""}
                />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {data.user?.name}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {data.user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/"}>
                <Icons.user className="h-4 w-4 mr-2" />
                Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/"}>
                <Icons.terminal className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/"}>
                <Icons.settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/sign-out"}>
                <Icons.logout className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"secondary"}
              className="relative h-8 w-8 rounded-full mb-1.5"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-blue-300">{initials}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-xs leading-none text-muted-foreground">
                  {email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/"}>
                <Icons.user className="h-4 w-4 mr-2" />
                Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/"}>
                <Icons.terminal className="h-4 w-4 mr-2" />
                Dashboard
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/"}>
                <Icons.settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer">
              <Link href={"/sign-out"}>
                <Icons.logout className="h-4 w-4 mr-2" />
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
