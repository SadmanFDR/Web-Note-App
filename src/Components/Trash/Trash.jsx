import React, { useEffect, useState } from 'react'
import { MdAutoDelete } from "react-icons/md";
import { MdRestorePage } from "react-icons/md";
import { useSelector } from 'react-redux';
import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { useNavigate } from 'react-router-dom';




const Trash = () => {

  const navigate = useNavigate()

// ===================    redux data
const sliceUser = useSelector((reduxData)=>reduxData.allUser.value)

// ===================    variable
const [removeData , setremoveData] = useState([])

// ===================    funtion part
const parmanentDelete =(deletePar)=>{
remove(ref(db, 'BinNote/' + deletePar.key))
}

const delt =()=>{
  remove(ref(db, 'BinNote/'))
  navigate('/allNote')

}

// ===============   recover data
const recoverData =(recoverdatas)=>{
  set(push((ref(db, 'AllNote/'))), {
            todoTitle : recoverdatas.todoTitle,
            todoNote: recoverdatas.todoNote,
            bgColor : recoverdatas.bgColor,
            textColor : recoverdatas.textColor,
            pin : recoverdatas.pin,
            UserId : sliceUser.uid
          });
 remove(ref(db, 'BinNote/' + recoverdatas.key))

}



// ===================    firebase data
const db = getDatabase();


// ===================    realtime database

useEffect(()=>{
  onValue(ref(db, 'BinNote/') , (snapshot) => {
    let arr= []
 
    snapshot.forEach((item)=>{
      if(item.val().UserId == sliceUser.uid){
        arr.push({...item.val(), key:item.key})
      }
      setremoveData(arr)
    })
    
  });
},[])

  return (
    <>


    <div className="main_bin  p-5">
       <div className='text-right'>

         <button onClick={delt} className='w-fit px-4 py-2 text-white duration-300 transition-all hover:font-bold hover:text-green-300 hover:bg-gray-900 bg-gray-700 rounded-md'  >
            Delete all
         </button>
         </div>
         {/* ===============    */}
       {

        removeData.map((item)=>(

          <dir key={item.key} className='flex justify-between bg-slate-400 rounded-lg px-3 py-1 items-center mt-4'>
          <h2 className='text-[20px] font-SmallFont text-white font-medium dark:text-gray-900'>
           {item.todoTitle}
          </h2>
          {/* ======================      delete */}
            <div className="button_flex flex justify-center items-center flex-col gap-1 md:gap-3">
            <button
            onClick={()=>parmanentDelete(item)}
            className="bg-white text-center w-[120px] py-2 lg:w-40 rounded-2xl h-12 lg:h-14 relative text-black text-xl font-semibold group"
            type="button"
            >
            <div
            className="bg-red-400 rounded-xl h-8 mt-1 lg:mt-0  lg:h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[100px]  lg:group-hover:w-[150px] z-10 duration-500"
            >
            <MdAutoDelete />

            </div>
            <button  className="translate-x-2 text-[14px] md:text-[18px] lg:text-[22px]">Delete</button>
            </button>
            <button
           onClick={()=>recoverData(item)}
            className="bg-white text-center w-[120px] py-2 lg:w-40 rounded-2xl h-12 lg:h-14 relative text-black text-xl font-semibold group"
            type="button"
            >
            <div
            className=" bg-green-600 rounded-md h-8  lg:h-12 w-1/4 flex items-center justify-center absolute left-1 lg:top-[4px] group-hover:w-[100px] lg:group-hover:w-[150px] z-10 duration-500"
            >
            <MdRestorePage />


            </div>
            <button className="translate-x-2  text-[14px] md:text-[18px] lg:text-[22px]">Restore</button>
            </button>
            </div>

       </dir>
        ))

       }
      
    </div>
    

    </>
  )
}

export default Trash