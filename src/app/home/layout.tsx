import React from "react";
import { SideBar, MainHeader, SideModal, MusicPlayerToast } from "@/ui/view";

export default async function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex w-full space-x-2  ">
      <SideBar containerClass="w-[350px]" />
      <main className="bg-gray-900 flex-1 relative">
        <MainHeader />
        {children}
        <MusicPlayerToast />
        <SideModal />
      </main>
    </section>
  );
}
