"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { IconButton } from "../components";
import { UserIcon, LogOutIcon } from "../components/icons";
import { defaultLoginRedirect } from "@/routes";

interface IProps {}

const ControlPanel: React.FC<IProps> = () => {
  const { data } = useSession();

  const logOut = () => {
    signOut({
      callbackUrl: defaultLoginRedirect,
    });
  };

  return (
    <div className="flex justify-between border-b border-b-gray-300 py-4">
      <div className="flex space-x-2 items-center">
        {!!data?.user?.image ? (
          <Image
            src={data?.user?.image}
            alt="userIcon"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full"
          />
        ) : (
          <span className="bg-slate-100 inline-flex justify-center items-center rounded-full p-1.5">
            <UserIcon classnames="w-8 h-8" />
          </span>
        )}
        <h3
          className={
            "text-gray-100 text-heading_xs align-middle translate-y-0.5"
          }
        >
          Jon Doe
        </h3>
      </div>
      <IconButton clickHandler={logOut}>
        <LogOutIcon classnames="w-7 h-7 fill-gray-200" />
      </IconButton>
    </div>
  );
};

export default ControlPanel;
