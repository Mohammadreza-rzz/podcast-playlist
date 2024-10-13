import React from "react";
import { SideBar, MainHeader } from "@/ui/view";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex w-full space-x-2">
      <SideBar containerClass="bg-red-500 w-[350px]" />
      <main className="bg-blue-50 flex-1">
        <MainHeader />
        {children}
      </main>
    </section>
  );
}
