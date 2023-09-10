"use client";

import MainDashboardContainer from "@/components/Dashboard/Container/Main";
import Header from "@/components/Dashboard/Navigation/Header";
import NavbarDashboard from "@/components/Dashboard/Navigation/Navbar";
import ThemeChecker from "@/components/Dashboard/ThemeChecker";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "bg-light-v-1 text-dark-v-2 dark:text-light-v-1 font-dm dark:bg-dark-v-2"
        }
      >
        <NavbarDashboard />
        <div className=" mb-16 md:ml-[85px]">
          <Header />
          <MainDashboardContainer>{children}</MainDashboardContainer>
        </div>
        <ThemeChecker />
      </body>
    </html>
  );
}
