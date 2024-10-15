"use client";

import "@/assets/styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black-0 grid place-items-center h-screen">
        <SessionProvider>
          <Provider store={store}>
            <main className="w-[1900px] mx-auto my-28 h-[1060px]">
              {children}
            </main>
          </Provider>
        </SessionProvider>
      </body>
    </html>
  );
}
