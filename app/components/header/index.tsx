"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "../nav-item";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projetos",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <motion.header
      className="absolute top-0 z-10  h-24 w-full py-10 flex items-center justify-center"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            className="hover:scale-125"
            width={50}
            height={40}
            src="/images/icon3.png"
            alt="Home"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
