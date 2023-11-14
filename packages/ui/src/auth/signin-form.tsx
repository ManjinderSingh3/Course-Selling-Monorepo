import { Button, Label, Input } from "@course-selling-monorepo/utils";

export default function SignupForm() {
  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="example@gmail.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
      <Button className="w-full">Sign In</Button>
    </>
  );
}
