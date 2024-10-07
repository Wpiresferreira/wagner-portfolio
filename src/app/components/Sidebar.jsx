"use client";
import { useState } from "react";

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }
  return (
    <>
      <div  className={` ${showMenu? "max-w-[85vw] animate-[show-menu_1s_ease-in-out_1]": "max-w-4 animate-[hide-menu_1s_ease-in-out_1]"} overflow-hidden flex flex-col w-[80vw] bg-[--color1] text-[--background] 
         `}>
           <button onClick={toggleMenu}>
             <span className={` ${showMenu? "fa-close" : "fa-bars"} w-[85vw] mr-4 fa fa-lg py-8 px-4 `}></span>
           </button>
        <div className="p-5 whitespace-nowrap text-2xl">
          <span className="fa fa-user px-6 fa-lg"></span>About me
        </div>
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
