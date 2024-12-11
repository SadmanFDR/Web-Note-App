import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navber = () => {
  // =-=-=-=-=-=-=-=-=- logout
  const navigate = useNavigate()
  const dispach = useDispatch()
  const handelOut =()=>{
          navigate('/login')
          localStorage.removeItem('userInfo')
          dispach(allUser)
  }

const sliceuser = useSelector((state)=>state.allUser.value)



  return (
    <>
    <div className="main_nav py-3 dark:bg-slate-200 bg-slate-900 hidden lg:block">
   <div className="container">
      <div className="nav_content flex justify-between items-center">
             <h2 className='text-white text-[40px] font-bold font-Logofont dark:text-black'>S-Note</h2>
         {/* =-=-=-=-=-=-=-=-=-=-user profile */}
     <div className="user flex gap-3 items-center">
           <h3 className='text-white font-semibold text-xl dark:text-black'>{sliceuser?.displayName}</h3>
     <div className="profile  overflow-hidden  h-[40px] w-[40px] ">
      <img className=' rounded-full' src={sliceuser?.photoURL} alt="pho" />
{/* =-=-=-=-=-=-=    logout    -=-=-=-=-=-=- */}
         </div>
<div className="logout">
<IoMdLogOut onClick={handelOut} className='text-[30px] dark:text-purple-950 text-white'/>
</div>
     </div>
      </div>
   </div>
    </div>
    
    </>
  )
}

export default Navber