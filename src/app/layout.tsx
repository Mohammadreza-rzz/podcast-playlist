import type { Metadata } from "next";
import "@/assets/styles/globals.scss";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black-0 grid place-items-center h-screen">
        <main className="w-[1900px] mx-auto my-28 h-[1060px]">{children}</main>
      </body>
    </html>
  );
}
