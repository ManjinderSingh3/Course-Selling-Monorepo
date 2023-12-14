"use client";
import { RecoilRoot } from "recoil";

export function RecoilRootWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <RecoilRoot>{children}</RecoilRoot>;
}
