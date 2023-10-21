/*
Notes: 
1- If a component has two exports, other than default export of the component, the second export runs first.
*/

import { Typography, Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import HomeRoot from "@/components/HomeRoot";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function handler({ session }) {
  // The session object passed in the parameter of handler is passed from getServerSideProps method
  const router = useRouter();

  if (session.user) {
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
        <div>
          <Button
            variant="contained"
            onClick={() => {
              signIn();
            }}
            style={{
              borderRadius: 9999,
              backgroundColor: "#0d9488",
              fontSize: ".875rem",
            }}
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }
}

// The control will first reach here. It will get the details of the user if they are already logged in or not

// context.req contains cookies, and getServerSession extracts cookies from it
export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions); // The session object will have deatils on/of the server

  //If user is not logged in
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    if (session.user) {
      return {
        props: {
          session: {
            user: {
              email: session.user.email,
            },
          },
        },
      };
    }
  }
}
