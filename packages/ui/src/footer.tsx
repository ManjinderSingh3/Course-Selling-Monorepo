import { SocialHandles } from "@course-selling-monorepo/utils/";
import { Github, LinkedIn } from "./icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div>
        <hr />
      </div>

      <div className="container flex justify-between mt-6">
        <div>01</div>
        <div className="flex ">
          <a
            href="https://github.com/steven-tey/dub"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-sky-200"
          >
            <Github className="h-5 w-8 text-back-300" />
          </a>
          <div className="h-9 border-1 border-black-400" />
          <a
            href="https://www.linkedin.com/company/dubhq/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
          >
            <LinkedIn className="h-5 w-8" fill="#52525B" />
          </a>
        </div>
      </div>
    </footer>
  );
};
