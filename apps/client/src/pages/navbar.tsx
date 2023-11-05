import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { Typography, Button } from "@mui/material";
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
            <img src="/Logo.png" className="h-10 mr-3" />
          
            <button
              className="rounded-md text-md font-serif hover:bg-gray-100 hover:text-black p-2 text-gray-500"
              onClick={() => {
                router.push("/");
              }}
            >
              Add Course
            </button>
            <button
              className="rounded-md text-md font-serif hover:bg-gray-100 p-2 text-gray-500"
              onClick={() => {
                router.push("/");
              }}
            >
              Courses
            </button>
          </div>
          <div>
          <button
              className="rounded-md bg-black text-md font-serif hover:bg-black p-2 text-white"
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
};
