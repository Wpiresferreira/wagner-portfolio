"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const waltograph = localFont({
  src: "../fonts/Waltograph.ttf",
});

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div className="flex items-center w-[100vw]">
        <div className="whitespace-nowrap grow text-center">
          <span className={`${waltograph.className} text-3xl antialiased`}>W</span>
          <span className="italic text-2xl">agner's </span>
          <span className={`${waltograph.className} text-3xl antialiased`}>P</span>
          <span className="italic text-2xl">ortfolio</span>
        </div>

        <button onClick={toggleMenu}>
          <span
            className={` ${
              showMenu ? "fa-close" : "fa-bars"
            } mr-4 fa fa-lg py-8 px-4 `}
          ></span>
        </button>
      </div>
      <div
        className={` ${
          showMenu
            ? "max-w-[85vw] animate-[show-menu_1s_ease-in-out_1]"
            : "max-w-4 animate-[hide-menu_1s_ease-in-out_1]"
        } overflow-hidden flex flex-col w-[80vw] bg-[--color1] text-[--background] 
         `}
      >
         <Link href="./" className="p-5 whitespace-nowrap text-2xl">
          <span className="fa fa-home px-6 fa-lg"></span>Home
        </Link>
        <Link href="./about-me/" className="p-5 whitespace-nowrap text-2xl">
          <span className="fa fa-user px-6 fa-lg"></span>About me
        </Link>
        <div className="p-5 whitespace-nowrap text-2xl">
          <span className="fa  fa-bullseye  fa-lg px-6"></span>Some Projects
        </div>
        <div className="p-5 whitespace-nowrap text-2xl">
          <span className="fa fa-file-text-o fa-lg px-6"></span>Resume
        </div>
        {/* <div className="relative inline-block bg-white fa rounded-r-2xl fa-chevron-right h-[100%]" */}
      </div>
    </>
  );
}
