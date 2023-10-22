import { Typography, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import HomeRoot from "@/components/HomeRoot";
import { useSetRecoilState } from 'recoil';
import { userState } from 'store';

//  ---------  Currently this handler has logic of Appbar  ----------
export default function Home() {
  const router = useRouter();
  const session = useSession(); //This is a client side hook. It runs on client side and sends backend request to get user's details
  //const setUser = useSetRecoilState(userState);
  if (session.data) {
    return (
      <div className="max-w-md">
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
        <div>
          <HomeRoot />
        </div>
      </div>
    );
  } else {
    return (
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
                console.log(session.data);
                console.log("--Signup Successful !!");
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
    );
  }
}
