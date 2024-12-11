import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navber from '../Navber/Navber'
import { useSelector } from 'react-redux'
import SideNav from '../Components/SideNav/SideNav'

const LayoutOne = () => {
  const sliceuser = useSelector((state)=>state.allUser.value)

  const navigate = useNavigate()
  useEffect(()=>{
    if(sliceuser== null){
      navigate('/login')

    }
  },[])
  return (
    <>
    <Navber/>
<div className="ek flex">
<SideNav/>
<Outlet/>
</div>
    </>
  )
}

export default LayoutOne