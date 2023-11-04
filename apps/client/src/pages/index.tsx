import { Typography, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import HomeRoot from "@/components/HomeRoot";
import { useSetRecoilState } from "recoil";
import { userState } from "store";
import { Footer } from "@course-selling-monorepo/ui";
import {
  Github,
  LinkedIn,
  Twitter,
} from "@course-selling-monorepo/ui/src/icons";

//  ---------  Currently this handler has logic of Appbar  ----------
export default function Home() {
  const router = useRouter();
  const session = useSession(); //This is a client side hook. It runs on client side and sends backend request to get user's details
  //const setUser = useSetRecoilState(userState);
  if (session.data) {
    return (
      <div>
        <div className="container flex justify-between mt-4">
          <div
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            <Typography variant="h5"> CourseHub</Typography>
          </div>
          <div>
            <Button
              onClick={() => {
                router.push("/");
              }}
            >
              Add Course
            </Button>

            <Button
              style={{ marginRight: 10 }}
              onClick={() => {
                router.push("/");
              }}
            >
              Courses
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              onClick={() => {
                signOut();
                //router.push("/");
              }}
            >
              Logout
            </Button>
          </div>
        </div>
        <div className="border-t mt-4 border-gray-200 bg-white/50 py-6 backdrop-blur-lg" />
        <div>
          <HomeRoot />
          <footer className="border-t border-gray-200 bg-white/50 py-6 backdrop-blur-lg">
            <div className="container flex justify-between -mb-8">
              <div className="flex mt-2">
                <p className="text-sm text-black text-center mr-5 font-bold">
                  © {new Date().getFullYear()} Manjinder
                </p>
                <div className="text-sm mr-5">About</div>
                <div className="text-sm mr-5">Contact</div>
                <div className="text-sm">Privacy policy</div>
              </div>
              <div className="flex">
                <a
                  href="https://github.com/ManjinderSingh3"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md p-2 transition-colors hover:bg-gray-100 active:bg-sky-200"
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
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 5,
          }}
        >
          <div
            style={{ marginLeft: 10, cursor: "pointer" }}
            onClick={() => {
              router.push("/");
            }}
          >
            <Typography variant="h5"> CourseHub</Typography>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 10, borderRadius: "20" }}>
              <Button
                onClick={() => {
                  router.push("/signin");
                }}
                style={{ color: "#0d9488" }}
              >
                Sign In
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => {
                  signIn();
                  // if(session.data){
                  //   setUser({
                  //     isLoading:false,
                  //     userEmail: session.data.user?.email
                  //   })
                  // }
                  router.push("/signin");
                }}
                style={{
                  borderRadius: 9999,
                  backgroundColor: "#0d9488",
                  fontSize: ".875rem",
                }}
              >
                Signup
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
