"use client";
import { Github, LinkedIn, Twitter } from "./social-icons";
import { FOOTER_ITEMS } from "./footer-items";
import Link from "next/link";

export const FooterCopy = () => {
  return (
    <footer className="container z-10 border-t border-gray-200 py-8 backdrop-blur-lg">
      <div className="xl:grid xl:grid-cols-5 xl:gap-8">
        <div className="space-y-8 xl:col-span-2">
          <p className="text-sm text-primary">
            © {new Date().getFullYear()} Manjinder
          </p>
          <div className="flex items-center space-x-2">
            <a
              href="https://twitter.com/Manjindersinghw"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground py-2 px-0"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5 " />
            </a>
            <div className="h-8 border-l border-gray-200" />
            <a
              href="https://github.com/ManjinderSingh3"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
            >
              <span className="sr-only">Github</span>
              <Github className="h-5 w-5" />
            </a>
            <div className="h-8 border-l border-gray-200" />
            <a
              href="https://www.linkedin.com/in/manjinder-singh-dal/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 py-2 w-9 px-0"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedIn className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-primary">Features</h3>
              {/* <ul role="list" className="mt-4 space-y-4">
                  {navigation.features.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        {...(domain !== "dub.co" && {
                          onClick: () => {
                            va.track("Referred from custom domain", {
                              domain,
                              medium: `footer item (${item.name})`,
                            });
                          },
                        })}
                        className="text-sm text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul> */}
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm font-semibold text-primary">Legal</h3>
              <ul role="list" className="mt-4 space-y-4">
                {FOOTER_ITEMS.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
