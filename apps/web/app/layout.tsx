import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@course-selling-monorepo/ui";
import "@/styles/globals.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/authOptions";
import { UserSessionWrapper } from "./(wrappers)/user-session-wrapper/user-session-wrapper";
import { RecoilRootWrapper } from "./(wrappers)/recoil-wrapper/recoil-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Course Selling App",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootWrapper>
          <UserSessionWrapper session={session}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </UserSessionWrapper>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
