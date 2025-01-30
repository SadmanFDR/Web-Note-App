import React, { useEffect, useState } from 'react'
import { GiTireIronCross } from "react-icons/gi";
import { IoIosColorPalette } from "react-icons/io";
import { IoMdColorFilter } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { getDatabase, push, ref, set, update } from "firebase/database";
import { useSelector } from 'react-redux';
import { MdOutlineFormatColorText } from "react-icons/md";


const Popup = ({showvalue , popCross , editeDatavalue}) => {
  const [useCol , setuseCol] = useState(false)
  const [todoData , settodoData] =useState({todoTitle : '' , todoNote : '' , todoError: ''})
  const [colors ,setColors] = useState('#fcf4ff')
  const [textcol ,settextcol] = useState('000')



  // ===================  redux data
  const creator = useSelector((tower)=>tower.allUser.value)

// ======================   firebase read data
const db = getDatabase();

  // ---------------  funtion part
  const handelTodo = ()=>{
       if(todoData.todoTitle == ''){
        settodoData((prev)=>({...prev ,todoError :'Fullfill the Title!'}))
       }
      else if(todoData.todoNote == ''){
        settodoData((prev)=>({...prev ,todoError :'Fullfill the Note!'}))
       }
       else{
        set(push((ref(db, 'AllNote/'))), {
          todoTitle : todoData.todoTitle,
          todoNote: todoData.todoNote,
          bgColor : colors,
          textColor : textcol,
          pin : false,
          UserId : creator.uid
        });
        popCross()
        settodoData((prev)=>({...prev , todoTitle : '' , todoNote : '' , todoError: ''}))
       }
  }
  // ==================    update notes
  const handelUpdate =()=>{
    update(ref(db, 'AllNote/' + editeDatavalue.key),{
     bgColor:colors,
     UserId : creator.uid,
     todoTitle : todoData.todoTitle,
     todoNote: todoData.todoNote,
     pin : editeDatavalue.pin,
    })
    popCross()
  }


  useEffect(()=>{
    if(editeDatavalue)
      settodoData((prev)=>({...prev, 
        todoTitle: editeDatavalue.todoTitle,
        todoNote : editeDatavalue.todoNote
      }),
      setColors(editeDatavalue.bgColor),
      // settextcol(editeDatavalue.textColor),


      )
    },[editeDatavalue])



  return (
    <>
    <div className="sakib_con ">
<div className="container">
  
    <div className={`${showvalue? 'w-full' : 'w-0'} duration-300 z-30 transition-all flex justify-center items-center h-screen bg-[#00000070] absolute top-0 right-0`}>
      <button onClick={popCross} className={` ${showvalue? 'block' : "hidden"} text-3xl text-white dark:text-red-600 top-10 right-10 absolute transition-all duration-300 hover:rotate-[180deg]`}>
               <GiTireIronCross />
         </button>
{/* =-=-=-=-=-=-=-=-=- input fild */}
<div  style={{background: colors}} className= {`w-full md:w-[800px] ${showvalue? 'block' :'hidden'} h-[600px] bg-white rounded-lg mb-3 p-5 `}>

  {/* ----------------------       Error show */}
  <p className='text-red-500 text-[16px]'>{todoData.todoError}</p>

  <h2 className='text-gray-700 text-2xl font-Capital font-semibold'>Title</h2>
  <input style={{color  : textcol}} value={todoData.todoTitle} onChange={(e)=>{settodoData((prev)=>({...prev , todoTitle:e.target.value})),settodoData((prev)=>({...prev , todoError: ""}))}} placeholder='Title.....' className='w-full px-4 text-[15px] mb-4 h-10 font-SmallFont font-medium bg-slate-50 outline-none border-l-green-950 border-[1px] rounded-md text-black' type="text" />

  <h2 className='text-gray-700 text-2xl font-Capital mb-4 font-semibold'>Note</h2>
  <textarea style={{color  : textcol}} value={todoData.todoNote} onChange={(e)=>{settodoData((prev)=>({...prev , todoNote:e.target.value})) ,settodoData((prev)=>({...prev , todoError: ""}))}} placeholder='Note.....' className=' w-full px-4 py-2 max-h-[62%] h-[60%] text-[15px] font-SmallFont font-medium bg-slate-50 outline-none border-l-green-950 border-[1px] rounded-md text-black' type="text" />
{/* =-=-=-=-=-=-=-=-=- colors fild */}
<div className='mt-4 w-full overflow-hidden flex justify-between items-center'>

  <div className='flex gap-3 justify-start items-center relative Custom_col' >
  <div className={`${showvalue? 'block':'hidden'}`}>
<IoIosColorPalette onClick={()=>setuseCol(!useCol)}  className='text-2xl transition-all duration-500 text-gray-800 hover:rotate-[170deg]'/>
    </div>

<div className={`for_flex flex gap-3 ${useCol? 'left-9' : ' left-[-250px]'}  transition-all duration-500 justify-center items-center absolute top-0`}>
<button onClick={()=>setColors('#ac98b4')} className='w-5 h-5 rounded-full bg-[#6b4579]'></button>
<button onClick={()=>setColors('#445a4a')} className='w-5 h-5 rounded-full bg-[#445a4a]'></button>
<button onClick={()=>setColors('#b8bf85')} className='w-5 h-5 rounded-full bg-[#b8bf85]'></button>

{/* ========================    text color set */}
<div className='w-6 relative h-6 flex justify-center items-center rounded-full bg-slate-300'>
  <label htmlFor="textcol">
<MdOutlineFormatColorText className='text-2xl text-purple-900'/>

  </label>
  <input onChange={(e)=>settextcol(e.target.value)} type="color"  id='textcol' className='hidden'/>
</div>

{/* =-=-=-=-=-=-=-=-=-=-   custome colors */}
<div className="w-6 relative h-6 flex justify-center items-center rounded-full bg-slate-300">
<label htmlFor="colors">
<IoMdColorFilter className='text-xl text-purple-800'/>
</label>
<input onChange={(e)=>setColors(e.target.value)} type="color" id='colors'className='hidden' />
</div>


</div>

  </div>


  {/* +_+_+_+_+_+_+_+_  save button */}
{
  editeDatavalue?
  <button onClick={handelUpdate}
  type="submit"
  className="flex mr-3 md:mr-0 text-blue-950 justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-200 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  Update
  <FaSave className='text-blue-950 hover:text-white'/>
</button>
:
<button onClick={handelTodo}
type="submit"
className="flex mr-3 md:mr-0 text-blue-950 justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-gray-200 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
Save
<FaSave className='text-blue-950 hover:text-white'/>
</button>
}
  
</div>
</div>

    </div>
  </div>
  </div>
    </>
  )
}

export default Popup