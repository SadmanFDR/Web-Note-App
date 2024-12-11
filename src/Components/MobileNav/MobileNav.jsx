import React, { useState } from 'react'
import './MobileNav.css'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";

const MobileNav = () => {
  const [show , setshow] = useState(false)

  console.log(show)
  return (
    <>
    <nav className='ResMobile'>
        <div className="container">
        <div className="Mob-row">
          <div className="mob-logo">
            <Link to={'/'}><img src="Images/logo.png" alt="Moblogo" /><p>Lasle<span>VPN</span></p></Link>
            <div onClick={()=>setshow(!show)} className="menu-icon">
            <IoMdMenu  className='main_icon'/>
            </div>
          </div>
          
      {
        show ?
        <ul className='Mobile-menu'>
          <li><Link to={"/"}>About</Link></li>
          <li><Link to={"/"}>Features</Link></li>
          <li><Link to={"/"}>Pricing</Link></li>
          <li><Link to={"/"}>Testimonials</Link></li>
          <li><Link to={"/"}>Help</Link></li>
        </ul>


        :
        ''
      }
            
        </div>
        </div>
    </nav>
    </>
  )
}

export default MobileNav