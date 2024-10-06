"use client";
import { useState } from "react";

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <button onClick={toggleMenu}>
        <span className="fa fa-align-justify py-8 px-4"></span>
      </button>
      <div onClick={toggleMenu} className={` ${showMenu? "max-w-[85vw]": "w-4"} flex flex-col w-[80vw] bg-[--color1] text-[--background] `}>
        <div className="p-4">
          <span className="fa fa-user px-4"></span>About me
        </div>
        <div className="p-4">
          <span className="fa fa-user px-4"></span>Some Projects
        </div>
        <div className="p-4">
          <span className="fa fa-user px-4"></span>Resume
        </div>
        {/* <div className="relative inline-block bg-white fa rounded-r-2xl fa-chevron-right h-[100%]" */}
      </div>
    </>
  );
}
