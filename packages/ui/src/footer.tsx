import { SocialHandles } from "@course-selling-monorepo/utils/";
import { Github, LinkedIn } from "./icons";
import Link from "next/link";

export const Footer = () => {
  return (
    //<div className="text-rose-500 font-bold">TEST !!</div>
    // <footer className="background-color: hsl(233 12% 13% / var(1))">
    //   <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
    //     <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
    //       <div className="mx-auto my-6 text-center text-white md:hidden">
    //         Copyright &copy; 2022, All Rights Reserved
    //       </div>
    //     </div>
    //     <div className="flex justify-around space-x-32">
    //       <div className="flex flex-col space-y-3 text-white">
    //         <a href="#" className="hover:text-brightRed">
    //           Home
    //         </a>
    //         <a href="#" className="hover:text-brightRed">
    //           Pricing
    //         </a>
    //         <a href="#" className="hover:text-brightRed">
    //           Products
    //         </a>
    //         <a href="#" className="hover:text-brightRed">
    //           About
    //         </a>
    //       </div>
    //       <div className="flex flex-col space-y-3 text-white">
    //         <a href="#" className="hover:text-brightRed">
    //           Careers
    //         </a>
    //         <a href="#" className="hover:text-brightRed">
    //           Community
    //         </a>
    //         <a href="#" className="hover:text-brightRed">
    //           Privacy Policy
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="z-10 border-t">
      <div className="text-rose-500 font-bold">TEST !!</div>
      <div className="xl:grid xl:grid-cols-5 xl:gap-8">
        <div className="space-y-8 xl:col-span-2">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/steven-tey/dub"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors hover:bg-sky-500 active:bg-sky-200"
            >
              <Github className="h-5 w-5 text-gray-600" />
            </a>
            <div className="h-8 border-l border-black-200" />
            <a
              href="https://www.linkedin.com/company/dubhq/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
            >
              <LinkedIn className="h-5 w-5" fill="#52525B" />
            </a>
          </div>
        </div>
      </div>
    </footer>

    //   {/* <a
    //   href="https://twitter.com/Manjindersinghw"
    //   target="_blank"
    //   rel="noreferrer"
    //   className="group rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-gray-200"
    // >
    //   <span className="sr-only">Twitter</span>
    //   <Twitter className="h-5 w-5 text-gray-600" />
    // </a>
    // <div className="h-8 border-l border-gray-200" /> */}

    //   <div className="text-left text-sm leading-loose text-muted-foreground">
    //     Built by{" "}
    //     <a
    //       aria-label="Kickflip tutorial on YouTube"
    //       href="https://twitter.com/Manjindersinghw"
    //       target="_blank"
    //       rel="noreferrer"
    //       className="font-semibold transition-colors hover:bg-gray-100"
    //     >
    //       Manjinder
    //     </a>
    //   </div>

    //   <div className="flex items-center space-x-1">
    //     {SocialHandles.map((social) => {
    //       const Icon = Icons[social.icon];
    //       return (
    //         <Link href={social.href} target="_blank" rel="noreferrer">
    //           {/* <div
    //             className={cn(
    //               buttonVariants({ variant: "ghost", size: "icon" })
    //             )}
    //           >
    //             <Icon className="h-4 w-4" />
    //             <span className="sr-only">{social.title}</span>
    //           </div> */}
    //           <span className="sr-only">{social.title}</span>
    //         </Link>
    //       );
    //     })}
    //   </div>
    // </footer>
  );
};
