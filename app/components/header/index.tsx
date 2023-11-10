"use client";

import Link from "next/link";
import Image from "next/image";
import { NavItem } from "../nav-item";


const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export const Header = () => {
  return (
    <header
      className="absolute top-0 z-10  h-24 w-full py-10 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image
            width={50}
            height={40}
            src="/images/icon3.webp"
            alt="Home"
          />
        </Link>
        <nav className="flex items-center gap-4 sm:gap-10 my-20">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  );
};
