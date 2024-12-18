import React, { useState } from 'react'
import { MdNoteAdd } from "react-icons/md";
import Popup from '../Popup/Popup';

const AddCard = () => {
   // ===========_ custom variable
   const [show , setShow] = useState(false)

  return (
    <>
    <div onClick={()=> setShow(true)} className=' cursor-pointer p-2 flex items-center justify-center w-[120px] h-[120px] text-[24px] font-SmallFont font-semibold dark:text-white text-black rounded-xl border-purple-900 dark:bg-slate-700 bg-white border-[3px]'>
    <MdNoteAdd/><h3>Add</h3>
    </div>
    {/* ======================= popup coll in here */}
    <Popup showvalue={show} popCross={()=>setShow(false)} />
    </>
  )
}

export default AddCard