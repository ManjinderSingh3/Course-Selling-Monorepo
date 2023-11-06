import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import HomeRoot from "@/components/HomeRoot";
import { useSetRecoilState } from "recoil";
import { userState } from "store";
import { Footer } from "./footer";

export const Navbar = () => {
  const router = useRouter();
  const session = useSession(); //This is a client side hook. It runs on client side and sends backend request to get user's details
  //const setUser = useSetRecoilState(userState);
  if (session.data) {
    return (
      <div>
        <div className="container flex justify-between mt-4">
          <div
            className="cursor-pointer flex"
            onClick={() => {
              router.push("/");
            }}
          >
            <img src="/Logo.png" className="h-10 mr-14" />

            <button
              className="rounded-md text-md text-gray-600 font-serif hover:bg-gray-100 hover:text-black p-1 mr-2"
              onClick={() => {
                router.push("/");
              }}
            >
              Add Course
            </button>
            <button
              className="rounded-md text-md text-gray-600 font-serif hover:bg-gray-100 hover:text-black p-1 mr-2"
              onClick={() => {
                router.push("/");
              }}
            >
              Courses
            </button>
          </div>
          <div>
            <button
              className="rounded-full bg-black text-md font-serif hover:bg-white hover:text-black mt-1.5 px-4 py-1
              text-white"
              onClick={() => {
                signOut();
              }}
            >
              Logout
            </button>
          </div>
        </div>
        <div className="border-t mt-4 border-gray-200 bg-white/50 py-6 backdrop-blur-lg" />
        <div>
          <HomeRoot />
          <Footer />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container flex justify-between mt-4">
          <div
            className="cursor-pointer flex"
            onClick={() => {
              router.push("/");
            }}
          >
            <img src="/Logo.png" className="h-10 mr-3 " />
          </div>
          <div className="flex mt-2">
            <div className="mr-3">
              <button
                className="rounded-md text-md text-gray-500 font-serif hover:bg-gray-100 hover:text-black  p-1 "
                onClick={() => {
                  router.push("/signin");
                }}
              >
                Log in
              </button>
            </div>
            <div>
              <button
                className="rounded-full bg-black text-md font-serif hover:bg-white hover:text-black px-4 py-1
               text-white hover:border-2 hover:border-black"
                onClick={() => {
                  signIn();
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="border-t mt-4 border-gray-200 bg-white/50 py-2 backdrop-blur-lg" />
        <HomeRoot />
        <Footer />
      </div>
    );
  }
};
