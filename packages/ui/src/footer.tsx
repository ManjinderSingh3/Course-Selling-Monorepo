import { SocialHandles } from "@course-selling-monorepo/utils/";
import { Github, LinkedIn } from "./icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/50 py-6 backdrop-blur-lg">
      <div className="container flex justify-between -mb-8">
        <div className="flex">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Manjinder
          </p>
        </div>
        <div className="flex">
          <a
            href="https://github.com/ManjinderSingh3"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-sky-200"
          >
            <Github className="h-5 w-8 text-back-300" />
          </a>
          <div className="h-9 border-1 border-black-400" />
          <a
            href="https://www.linkedin.com/in/manjinder-singh-dal/"
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
