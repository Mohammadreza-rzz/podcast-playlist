import React from "react";
import { SideBar, MainHeader, SideModal } from "@/ui/view";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex w-full space-x-2 ">
      <SideBar containerClass="bg-red-500 w-[350px]" />
      <main className="bg-gray-900 flex-1 relative">
        <MainHeader />
        {children}
        <SideModal />
      </main>
    </section>
  );
}
