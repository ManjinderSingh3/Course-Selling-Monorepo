"use client";
import { useSetRecoilState } from "recoil";
import { userState } from "store";
import axios from "axios";
import { JwtPayload } from "@/lib/types";
import { useEffect } from "react";

// Function to Setup an ATOM
export default async function InitUser() {
  // Important NOTE : We are just setting up an atom here. We are not using/subscribing to an atom. So, Recoil will not re-render this component upon any change.
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      console.log("Inside TRY of Init User");
      const response: JwtPayload = await axios.get(`api/me`);
      console.log(response)
      if (response.email) {
        console.log("Inside IF of Init User");
        setUser({
          isLoading: false,
          userEmail: response.email,
        });
      } else {
        console.log("Inside ELSE of Init User");
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      console.log("Inside CATCH of Init User");
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}
