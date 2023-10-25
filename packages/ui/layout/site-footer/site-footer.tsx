import { SocialHandles, Icons } from "@course-selling-monorepo/utils";
import Link from "next/link";
export const SiteFooter = () => {
  const TWITTER_URL = process.env.TWITTER_URL;
  return (
    <section
      id="footer-bottom"
      aria-labelledby="footer-bottom-heading"
      className="flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row items-center space-x-4"
    >
      <div className="text-left text-sm leading-loose text-muted-foreground">
        Built by{" "}
        <a
          aria-label="Kickflip tutorial on YouTube"
          href="https://twitter.com/Manjindersinghw"
          target="_blank"
          rel="noreferrer"
          className="font-semibold transition-colors hover:text-foreground"
        >
          Manjinder
        </a>
      </div>

      <div className="flex items-center space-x-1">
        {SocialHandles.map((social) => {
          const Icon = Icons[social.icon];
          return (
            <Link href={social.href} target="_blank" rel="noreferrer">
              {/* <div
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" })
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="sr-only">{social.title}</span>
              </div> */}
              <span className="sr-only">{social.title}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
