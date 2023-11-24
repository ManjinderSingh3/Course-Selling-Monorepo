import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export * from "./shadcn-components/button";
export * from "./shadcn-components/card";
export * from "./shadcn-components/label";
export * from "./shadcn-components/input";
export * from "./shadcn-components/dropdown-menu";
export * from "./shadcn-components/avatar";
