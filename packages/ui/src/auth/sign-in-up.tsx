import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@course-selling-monorepo/utils";

type AuthProps = {
  OAuthSignIn: JSX.Element;
  title: string;
  description: string;
  cardFooter: JSX.Element;
};

export default function Authorization({
  OAuthSignIn,
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
      <CardContent></CardContent>
      {cardFooter}
    </Card>
  );
}
