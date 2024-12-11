import React, { useState } from 'react'
import { GiTireIronCross } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import { IoMdColorFilter } from "react-icons/io";

const Popup = ({showvalue , popCross}) => {
  const [useCol , setuseCol] = useState(false)
  return (
    <>
    <div className={`${showvalue? 'w-full' : 'w-0'} duration-300  transition-all flex justify-center items-center h-screen bg-[#00000070] absolute top-0 right-0`}>
      <button onClick={popCross} className='text-3xl text-white dark:text-red-600 top-10 right-10 absolute transition-all duration-300 hover:rotate-[180deg] '>
               <GiTireIronCross />
         </button>
{/* =-=-=-=-=-=-=-=-=- input fild */}
<div className= {`w-full md:w-[800px] ${showvalue? 'block' :'hidden'} h-[600px] bg-white rounded-lg mb-3 p-5 `}>
  <h2 className='text-gray-700 text-2xl font-Capital font-semibold'>Title</h2>
  <input placeholder='Title.....' className='w-full px-4 text-[15px] mb-4 h-10 font-SmallFont font-medium bg-slate-50 outline-none border-l-green-950 border-[1px] rounded-md text-black' type="text" />
  <h2 className='text-gray-700 text-2xl font-Capital mb-4 font-semibold'>Note</h2>
  <textarea placeholder='Note.....' className=' w-full px-4 py-2 max-h-[420px] h-[400px] text-[15px] font-SmallFont font-medium bg-slate-50 outline-none border-l-green-950 border-[1px] rounded-md text-black' type="text" />
{/* =-=-=-=-=-=-=-=-=- colors fild */}
<div className='mt-4 overflow-hidden'>
  <div className='flex gap-3 justify-start items-center relative Custom_col' >
  <div className={`${showvalue? 'block':'hidden'}`}>
<IoIosColorPalette onClick={()=>setuseCol(!useCol)}  className='text-2xl transition-all duration-500 text-gray-800 hover:rotate-[170deg]'/>
    </div>

<div className={`for_flex flex gap-3 ${useCol? 'left-9' : ' left-[-120px]'} transition-all duration-500 justify-center items-center absolute top-0`}>
<button className='w-5 h-5 rounded-full bg-[#ac98b4]'></button>
<button className='w-5 h-5 rounded-full bg-[#88b595]'></button>
<button className='w-5 h-5 rounded-full bg-[#b8bf85]'></button>
{/* =-=-=-=-=-=-=-=-=-=-   custome colors */}
<div className="w-5 h-5 rounded-full bg-slate-300">
<label htmlFor="colors">
<IoMdColorFilter className='text-xl  text-purple-700'/>
</label>
<input type="color" id='colors'className='hidden' />
</div>
</div>
  </div>
</div>
</div>

    </div>
    </>
  )
}

export default Popup