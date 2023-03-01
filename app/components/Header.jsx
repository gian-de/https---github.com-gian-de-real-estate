"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

import logo from "public/logo.png";

import ChevronDown from "./svg/ChevronDown";
import CloseMenu from "./svg/CloseMenu";
import HamburgerMenu from "./svg/HamburgerMenu";

const navLinks = [
  { name: "Browse properties", src: "/properties-for-sale" },
  { name: "About us", src: "/about-us" },
  { name: "Join us", src: "/join-us" },
  { name: "Contact", src: "/contact" },
];

export const Header = () => {
  const currentPathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLgBreakpoint, setIsLgBreakpoint] = useState(false);
  const mobileRef = useRef(null);

  // const HandleClickOutside = (e) => {
  //   if (e.target !== mobileRef.current) {
  //     setMobileOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", HandleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", HandleClickOutside);
  //   };
  // }, []);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleHover = () => {
    setDropdownOpen(true);
  };

  const handleClick = () => {
    setDropdownOpen(false);
  };

  const handleResize = () => {
    setIsLgBreakpoint(window.innerWidth >= 1024);
  };
  // this useEffect is for the edge case that a user doesnt open the nav menu, then goes to desktop view. which would result in the navigation still being "false". the effect makes the navigation always displayed on lg breakpoint and higher
  useEffect(() => {
    setIsLgBreakpoint(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <header
      className="sticky top-0 z-20 w-full bg-white shadow-lg"
      // onClick={(e) => e.stopPropagation()}
    >
      <div className="container relative flex items-center justify-between h-16 max-w-6xl p-4 mx-auto">
        <Link href="/">
          <div className="flex shrink-0">
            <Image
              className="object-cover"
              src={logo}
              width={200}
              height={80}
              priority
              alt="Green Haven logo"
            />
          </div>
        </Link>
        <div
          className="absolute z-20 cursor-pointer right-8 top-3 lg:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileOpen ? <CloseMenu /> : <HamburgerMenu />}
        </div>

        <nav
          ref={mobileRef}
          className={`lg:flex ${
            mobileOpen
              ? "top-16 pb-8 lg:pb-0 absolute bg-white w-full left-0 items-center justify-center lg:justify-end lg:w-auto lg:static lg:flex"
              : "hidden"
          } ${isLgBreakpoint ? "inline-block" : ""}`}
        >
          {isLgBreakpoint || mobileOpen ? (
            <>
              <ul className="flex flex-col items-center justify-center py-2 space-y-6 text-lg lg:py-0 lg:mr-32 lg:space-y-0 lg:text-base lg:gap-6 lg:flex lg:flex-row">
                <li
                  className="relative group"
                  onMouseEnter={handleHover}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <p className="flex items-center justify-center transition duration-100 ease-in-out cursor-pointer lg:cursor-default whitespace-nowrap hover:text-green-brand">
                    Services
                    <span className="flex items-center justify-center mt-1 text-gray-400">
                      <ChevronDown />
                    </span>
                  </p>
                  {dropdownOpen && (
                    <ul className="z-30 flex flex-col items-center mt-2 -mx-40 text-center transition duration-500 ease-in-out bg-gray-200 sm:-mx-60 lg:-mx-0 lg:items-start lg:mt-0 lg:bg-white lg:-ml-6 lg:rounded-sm lg:shadow-lg lg:absolute lg:invisible lg:group-hover:visible">
                      <li className="flex lg:w-full lg:hover:bg-green-brand lg:hover:text-white">
                        <Link
                          href="/buying"
                          className="px-6 py-2"
                          onClick={handleClick}
                        >
                          Buying
                        </Link>
                      </li>
                      <li className="flex lg:w-full lg:hover:bg-green-brand lg:hover:text-white">
                        <Link
                          href="/selling"
                          className="px-6 py-2"
                          onClick={handleClick}
                        >
                          Selling
                        </Link>
                      </li>
                      <li className="flex lg:w-full lg:hover:bg-green-brand lg:hover:text-white">
                        <Link
                          href="/property-management"
                          className="px-6 py-2"
                          onClick={handleClick}
                        >
                          Manage
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                {navLinks.map((link) => (
                  <li key={link.src}>
                    <Link
                      href={link.src}
                      className={`transition duration-100 ease-in-out whitespace-nowrap hover:text-green-brand ${
                        currentPathname === link.src ? "text-green-brand" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-center w-full pt-2 lg:pt-0 lg:w-auto">
                <Link
                  className="w-3/5 px-4 py-1 text-center text-white transition rounded-full lg:w-auto lg:flex bg-green-brand hover:bg-black"
                  href="/"
                >
                  Get a free appraisal
                </Link>
              </div>
            </>
          ) : null}
        </nav>
      </div>
    </header>
  );
};
