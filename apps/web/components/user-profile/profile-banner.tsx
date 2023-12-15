"use client";
import { UserProfileDropdown } from "@course-selling-monorepo/ui";
import { SigninAndSignupButtons } from "@course-selling-monorepo/ui";
import { useRecoilValue } from "recoil";
import { userEmailState } from "store";
import { useSession } from "next-auth/react";

export const ProfileBanner = () => {
  // Next-Auth session data
  const session = useSession();
  const nextAuthInitials = `${session.data?.user?.name?.charAt(0) ?? ""}`;

  // User details from ME route
  const userEmail = useRecoilValue(userEmailState); // Subscribing to Selector
  const jwtInitials = `${userEmail?.charAt(0) ?? ""}`;

  return (
    <div className="hidden lg:block mt-1.5 mr-2">
      {session.data?.user ? (
        <>
          <UserProfileDropdown
            data={session.data}
            initials={nextAuthInitials}
          ></UserProfileDropdown>
        </>
      ) : //Else-If condition to check if user has logged in. Hit ME route and see.
      userEmail ? (
        <>
          <UserProfileDropdown
            email={userEmail}
            initials={jwtInitials}
          ></UserProfileDropdown>
        </>
      ) : (
        <SigninAndSignupButtons />
      )}
    </div>
  );
};
