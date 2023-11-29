import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@course-selling-monorepo/ui";
import "@/styles/globals.css";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@course-selling-monorepo/auth";
import { ClientComponentsSessionProvider } from "@/app/session-provider/client-comp-session-provider";

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
        <ClientComponentsSessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </ClientComponentsSessionProvider>
      </body>
    </html>
  );
}
