import {
  Github,
  LinkedIn,
  Twitter,
} from "@course-selling-monorepo/ui/src/icons";

export const OldFooter = () => {
  return (
    <footer className="border-t border-gray-200 bg-white/50 py-6 backdrop-blur-lg">
      <div className="container flex justify-between -mb-8">
        <div className="flex mt-2">
          <p className="text-sm text-black text-center mr-5 font-bold">
            © {new Date().getFullYear()} Manjinder
          </p>
          <div className="text-sm mr-5 text-gray-600 hover:text-black cursor-pointer hover:underline">
            About
          </div>
          <div className="text-sm mr-5 text-gray-600 hover:text-black cursor-pointer hover:underline">
            Contact
          </div>
          <div className="text-sm mr-5 text-gray-600 hover:text-black cursor-pointer hover:underline">
            Privacy policy
          </div>
        </div>
        <div className="flex">
          <a
            href="https://github.com/ManjinderSingh3"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
          >
            <Github className="h-5 w-5 text-back-300" />
          </a>
          <div className="mr-2" />
          <a
            href="https://www.linkedin.com/in/manjinder-singh-dal/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
          >
            <LinkedIn className="h-5 w-5" fill="#52525B" />
          </a>
          <div className="mr-2" />
          <a
            href="https://twitter.com/Manjindersinghw"
            target="_blank"
            rel="noreferrer"
            className="group rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
          >
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5 text-gray-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};
