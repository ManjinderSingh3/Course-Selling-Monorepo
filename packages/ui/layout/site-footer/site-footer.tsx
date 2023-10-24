import {SocialHandles} from 
export const SiteFooter = () => {
  const TWITTER_URL = process.env.TWITTER_URL
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
    </section>
  );
};
