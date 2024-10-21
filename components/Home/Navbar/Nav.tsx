import { navLinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setnavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setnavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "bg-[#240b39]" : "bg-transparent"
      } h-[12vh] z-[10] w-full`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={170}
          height={170}
          className="ml-[-1.5rem] sm:ml-0"
          priority={true}
        />
        <div className="flex items-center space-x-10">
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav__link hover:text-[#7947df] transition-colors">
                  {navlink.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
                Hire Me
              </button>
            </Link>
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 text-white cursor-pointer lg:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
