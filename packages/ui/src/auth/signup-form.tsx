"use client";
import { Button, Label, Input } from "@course-selling-monorepo/utils";

export function SignupForm() {
  return (
    <>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="example@gmail.com" />
      </div>
      <div className="grid gap-2 mt-4">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <Button className="w-full mt-4">Create Account</Button>
    </>
  );
}
