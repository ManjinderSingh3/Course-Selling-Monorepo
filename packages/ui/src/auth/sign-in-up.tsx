"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@course-selling-monorepo/utils";

type AuthProps = {
  OAuthSignIn: JSX.Element;
  signInOrUpComp: JSX.Element;
  title: string;
  description: string;
  cardFooter: JSX.Element;
};

export function Authorization({
  OAuthSignIn,
  signInOrUpComp,
  title,
  description,
  cardFooter,
}: AuthProps) {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* {OAuthSignIn} */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        {signInOrUpComp}
      </CardContent>
      {cardFooter}
    </Card>
  );
}
