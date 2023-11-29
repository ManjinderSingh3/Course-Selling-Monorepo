import { Github, LinkedIn, Twitter } from "./social-icons";

export const FooterCopy = () => {
  return (
    <footer className="w-full border-t bg-background">
      {/* <section
          id="footer-bottom"
          aria-labelledby="footer-bottom-heading"
          className="container flex flex-col xl:flex-row lg:flex-row md:flex-row sm:flex-row items-center space-x-4"
        > */}
      <div className="hidden lg:block">
        <div className="text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            aria-label="Kickflip tutorial on YouTube"
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-foreground"
          >
            Manjinder
          </a>
          .
        </div>
        <div className="text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            aria-label="Kickflip tutorial on YouTube"
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-foreground"
          >
            Manjinder
          </a>
          .
        </div>
        <div className="text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            aria-label="Kickflip tutorial on YouTube"
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-foreground"
          >
            Manjinder
          </a>
          .
        </div>
        <div className="text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            aria-label="Kickflip tutorial on YouTube"
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-foreground"
          >
            Manjinder
          </a>
          .
        </div>
        {/* </section> */}
      </div>
    </footer>
  );
};
