import { UserProfileDropdown } from "@course-selling-monorepo/ui";
import { getServerSession } from "next-auth";
import { authOptions } from "@course-selling-monorepo/auth";
import { SigninAndSignupButtons } from "@course-selling-monorepo/ui";

export const ProfileBanner = async () => {
  const data = await getServerSession(authOptions);
  const initials = `${data?.user?.name?.charAt(0) ?? ""}`;

  // We can do if-else for Next-Auth session and for ME route 

  return (
    <div className="hidden lg:block mt-1.5 mr-2">
      {data?.user ? (
        <>
          <UserProfileDropdown
            data={data}
            initials={initials}
          ></UserProfileDropdown>
        </>
      ) : (
        <SigninAndSignupButtons />
      )}
    </div>
  );
};
