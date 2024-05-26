"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className={`hidden h-full gap-12 lg:flex ${menuOpen ? "flex" : "hidden"}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="flexCenter">
            <Link href={link.href}>
              <span className="regular-16 text-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flexCenter hidden lg:flex">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white flex flex-col items-center lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="w-full text-center py-2">
              <Link href={link.href}>
                <span
                  onClick={() => setMenuOpen(false)}
                  className="block w-full regular-16 text-16 text-gray-900 transition-all hover:font-bold"
                >
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
          <li className="w-full text-center py-2">
            <Button
              type="button"
              title="Login"
              icon="/user.svg"
              variant="btn_dark_green"
              onClick={() => setMenuOpen(false)}
            />
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
