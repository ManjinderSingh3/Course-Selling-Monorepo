"use client";
import { useSetRecoilState } from "recoil";
import { userState } from "store";
import axios from "axios";
import { useEffect } from "react";

// Function to Setup an ATOM
export default async function InitUser() {
  // Important NOTE : We are just setting up an atom here. We are not using/subscribing to an atom. So, Recoil will not re-render this component upon any change.
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(`api/auth/me`);
      if (response.data.email) {
        setUser({
          isLoading: false,
          userEmail: response.data.email,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
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
