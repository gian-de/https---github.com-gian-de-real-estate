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
  { name: "Blog", src: "/blog" },
  { name: "Contact", src: "/contact" },
];
const navLinksSubmenu = [
  { name: "Buying", src: "/buying" },
  { name: "Selling", src: "/selling" },
  { name: "Manage", src: "/property-management" },
];

export const Header = () => {
  const currentPathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLgBreakpoint, setIsLgBreakpoint] = useState(false);
  const mobileRef = useRef(null);

  const handleClickOutside = (e) => {
    if (e.target !== mobileRef.current) {
      setMobileOpen(false);
    }
  };

  // this useEffect is if mobile menu is open. close mobile menu if user clicks outside of mobile menu
  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
      className="sticky top-0 z-20 w-full bg-white shadow-md"
      // onClick={(e) => e.stopPropagation()}
    >
      <div className="container relative flex items-center justify-between h-16 p-5 mx-auto lg:py-8 max-w-7xl">
        <Link href="/" className="flex shrink-0">
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
        <button
          id="navbar"
          className="absolute z-20 cursor-pointer right-8 top-3 lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <CloseMenu /> : <HamburgerMenu />}
        </button>

        <nav
          className={`lg:flex ${
            mobileOpen
              ? "top-16 overflow-y-auto overflow-x-hidden pb-8 z-20 lg:pb-0 absolute bg-white w-full left-0 items-center justify-center lg:justify-end lg:w-auto lg:static lg:flex"
              : "hidden"
          } ${isLgBreakpoint ? "inline-block" : ""}`}
        >
          {isLgBreakpoint || mobileOpen ? (
            <>
              <ul
                ref={mobileRef}
                className="flex flex-col items-center justify-center py-2 space-y-5 text-lg lg:py-0 lg:pl-3 lg:space-y-0 lg:text-base lg:gap-6 lg:flex lg:flex-row lg:justify-between"
              >
                {!isLgBreakpoint ? (
                  navLinksSubmenu
                    .filter((link) => link.name !== "Manage")
                    .map((link) => (
                      <li key={link.src}>
                        <Link
                          href={link.src}
                          className={`transition duration-100 ease-in-out whitespace-nowrap hover:text-green-brand ${
                            currentPathname === link.src
                              ? "text-green-brand"
                              : ""
                          }`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))
                ) : (
                  // Only visible large break point + nav hover dropdown
                  <li
                    className="relative group"
                    onMouseEnter={handleHover}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    <p className="flex items-center justify-center transition duration-100 ease-in-out cursor-pointer lg:cursor-default whitespace-nowrap hover:text-green-brand">
                      Services
                      <span className="flex items-center justify-center text-gray-400">
                        <ChevronDown />
                      </span>
                    </p>

                    {dropdownOpen && (
                      <ul className="z-30 flex flex-col items-center text-center transition duration-500 ease-in-out bg-gray-200 lg:pt-2 lg:-ml-4 lg:items-start lg:bg-white lg:rounded-sm lg:shadow-lg lg:absolute lg:invisible lg:group-hover:visible">
                        {navLinksSubmenu.map((link) => (
                          <li
                            key={link.src}
                            className="flex lg:w-full lg:hover:bg-green-brand lg:hover:text-white"
                          >
                            <Link
                              href={link.src}
                              className={`transition px-5 py-2 duration-100 ease-in-out whitespace-nowrap hover:text-white ${
                                currentPathname === link.src
                                  ? "text-green-brand "
                                  : ""
                              }`}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )}

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
              {/* mobile nav button inside hamburger */}
              <div className="flex items-center justify-center pt-2 lg:hidden">
                <Link
                  className="px-10 py-2 tracking-tighter text-center text-white transition rounded-full whitespace-nowrap lg:w-auto lg:flex bg-green-brand hover:bg-black"
                  href="/appraisal"
                >
                  Get a free appraisal
                </Link>
              </div>
            </>
          ) : null}
        </nav>
        <div className="items-center justify-center hidden w-full pt-2 lg:flex lg:pt-0 lg:w-fit">
          <Link
            className="w-3/5 px-4 py-1 tracking-tighter text-center text-white transition rounded-full whitespace-nowrap lg:w-auto lg:flex bg-green-brand hover:bg-black"
            href="/appraisal"
          >
            Get a free appraisal
          </Link>
        </div>
      </div>
    </header>
  );
};
