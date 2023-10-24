import { Icons } from "./icons";

type SocialHandle = {
  title: string;
  href: string;
  icon: keyof typeof Icons;
};

export const SocialHandles: SocialHandle[] = [
  {
    title: "Github",
    href: "https://github.com/ManjinderSingh3",
    icon: "gitHub",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/Manjindersinghw",
    icon: "twitter",
  },
];
