"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface IProps {
  icon?: React.ReactNode;
  value?: string;
  to?: string;
  isActive?: boolean;
}

//animations object
const navButtonVariants = {
  initial: {
    x: 0,
  },
  hover: { backgroundColor: "#686d6e" },
  contentHover: {
    x: 3,
    transition: {
      type: "tween",
      stiffness: 100,
      duration: 0.5,
    },
  },
  active: {
    backgroundColor: "#686d6e",
    borderRadius: "8px",
  },
};

const NavButton: React.FC<IProps> = ({
  icon,
  value = "",
  isActive = false,
  to = "/home",
}) => {
  return (
    <motion.div
      className="rounded-xs bg-transparent click_Effect my-1"
      variants={navButtonVariants}
      whileHover={"hover"}
      animate={isActive ? "active" : "initial"}
    >
      <Link href={to!} prefetch={false}>
        <motion.span
          variants={navButtonVariants}
          whileHover={"contentHover"}
          className="inline-flex items-center space-x-2 p-3.5 w-full"
        >
          {icon}
          <h4 className="text-heading_2xs font-normal text-gray-100 translate-y-0.5">
            {value}
          </h4>
        </motion.span>
      </Link>
    </motion.div>
  );
};

export default NavButton;
