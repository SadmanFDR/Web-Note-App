import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdLogOut } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="main_nav py-2 lg:py-3 sticky w-full dark:bg-slate-200 bg-slate-900  lg:block">
   <div className="container">
      <div className="nav_content flex justify-between items-center">
      <Link to={'/'}> <h2 className='text-white text-xl md:text-2xl lg:text-[40px] font-bold font-serif dark:text-black'>S-Note</h2></Link>
         {/* =-=-=-=-=-=-=-=-=-=-user profile */}
     <div className="user flex gap-2 md:gap-3 items-center">
           <h3 className='text-white font-semibold text-[14px] lg:text-xl md:text-[20px] dark:text-black'>{sliceuser?.displayName}</h3>
     <div className="profile overflow-hidden  md:h-[40px] h-[30px] w-[30px] md:w-[40px] ">
      <img className=' rounded-full' src={sliceuser?.photoURL} alt="pho" />
{/* =-=-=-=-=-=-=    logout    -=-=-=-=-=-=- */}
         </div>
<div className="logout">
<IoMdLogOut onClick={handelOut} className='text-[20px] md:text-[25px] lg:text-[30px] dark:text-purple-950 text-white'/>
</div>
     </div>
      </div>
   </div>
    </div>
    <hr />
    
    </>
  )
}

export default Navber