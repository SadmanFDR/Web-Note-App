import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdNote } from "react-icons/md"
import { PiNotePencilBold } from "react-icons/pi";
import { BiNotepad } from "react-icons/bi";

const SideNav = () => {

  // ========== state
  const [toggleValue, setToggleValue] = useState(false);
  // ========== saving the mode when user  visitor
  useEffect(() => {
    const savedMode = localStorage.getItem("mode") || "light";
    localStorage.setItem("mode", savedMode);
    document
      .querySelector("html")
      .classList.toggle("dark", savedMode === "dark");
  }, []);
  // ========== changing the mode on toggle
  const handelMode = () => {
    if (localStorage.getItem("mode") == "light") {
      localStorage.setItem("mode", "dark");
      document.querySelector("html").classList.add("dark");
      setToggleValue(!toggleValue);
    } else {
      localStorage.setItem("mode", "light");
      document.querySelector("html").classList.remove("dark");
      setToggleValue(!toggleValue);
    }
  }

  return (
    <>
    <nav className='h-screen w-[200px] bg-slate-900 dark:bg-white'>
         <h2 className=' result text-white text-[28px] font-SmallFont p-4 dark:text-black'>All Note</h2>
         <ul className='mt-10 flex flex-col gap-10 pl-2 '>
            <li className='flex'> 
                  <NavLink
                  to="/allNote"
                  className={({ isActive}) =>  [ isActive ?  'activepage' : "notActive", ].join(" ") } >
                 <MdNote className='text-[18px] text-white'/> All Note
                  </NavLink>
            </li>
            <li className='flex'>
                  <NavLink
                  to="/pinNote"
                  className={({ isActive}) =>  [ isActive ?  'activepage' : "notActive", ].join(" ") } >
                <PiNotePencilBold className='text-[18px] text-white'/> Pin Notes
                  </NavLink>
            </li>
            
            <li className='flex'> 
                  <NavLink
                  to="/binNote"
                  className={({ isActive}) =>  [ isActive ?  'activepage' : "notActive", ].join(" ") } >
                <BiNotepad className='text-[18px] text-white'/> Bin
                  </NavLink>
            </li>

         </ul>
         {/* =-=-=-=-=-=-=-=-=-=- for dark thime */}
         {localStorage.getItem("mode") == "light" ? (
          <button
            className="py-1 px-3 mt-6 ml-[50px] bg-slate-100 text-xl text-black rounded-xl"
            onClick={handelMode}
          >
            Dark
          </button>
        ) : (
          <button
            className="py-1 px-3 mt-6 ml-[50px] bg-purple-800 text-white rounded-xl text-xl"
            onClick={handelMode}
          >
            Light
          </button>
        )}
    </nav>
    </>
  )
}

export default SideNav