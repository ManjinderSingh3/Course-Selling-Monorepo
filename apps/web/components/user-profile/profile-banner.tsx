import { UserProfileDropdown } from "@course-selling-monorepo/ui";
import { buttonVariants } from "@course-selling-monorepo/utils";
import { getServerSession } from "next-auth";
import { authOptions } from "@course-selling-monorepo/auth";
import { SigninAndSignupButtons } from "@course-selling-monorepo/ui";

export const ProfileBanner = async () => {
  const data = await getServerSession(authOptions);
  const initials = `${data?.user?.name?.charAt(0) ?? ""}`;

  return (
    <>
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
    </>
  );
};
