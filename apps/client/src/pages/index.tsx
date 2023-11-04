import { Typography, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import HomeRoot from "@/components/HomeRoot";
import { useSetRecoilState } from "recoil";
import { userState } from "store";
import { Footer } from "@course-selling-monorepo/ui";
import { Github, LinkedIn } from "@course-selling-monorepo/ui/src/icons";

//  ---------  Currently this handler has logic of Appbar  ----------
export default function Home() {
  const router = useRouter();
  const session = useSession(); //This is a client side hook. It runs on client side and sends backend request to get user's details
  //const setUser = useSetRecoilState(userState);
  if (session.data) {
    return (
      <div>
        <div
          className="container "
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ cursor: "pointer" }}
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
        <div className="border-t mt-4 border-gray-200 bg-white/50 py-6 backdrop-blur-lg"/>
        <div>
          <HomeRoot />
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
