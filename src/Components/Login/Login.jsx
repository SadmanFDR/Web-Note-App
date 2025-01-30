import React, { useState } from 'react'
import './Login.css'
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { userData } from '../../Slice/UserSlice';


const Register = () => {
// ========== firebase take data
const auth = getAuth();
const dispach = useDispatch()

// =========eye fun 
const [show , setshow] = useState(true)
const [formData , setformData] =useState({ userEmail :"" , userPassword :"" })
const [error , setError] = useState({ emailError:"" , passwordError:""})
// =------------= navigate
const navhome = useNavigate()

// ===============    error text
const handelBut = (e)=>{
  // ========== for text
  e.preventDefault()
if(formData.userName == "")
   setError((prev)=>({...prev , userError: "Pleas fullfill this form"}))
  if(formData.userEmail == "")
    setError((prev)=>({...prev , emailError:"Pleas fullfill this form"}))
  if(formData.userPassword == "")
    setError((prev)=>({...prev ,passwordError :"Pleas fullfill this form"}))
  // ========== for button
else{
  signInWithEmailAndPassword(auth, formData.userEmail, formData.userPassword)

  
  .then((userCredential) => {
    const user = userCredential.user;

    if( user.emailVerified == true )
      {
        // =-=-=-=-=-=-=-=-=-=-=-=-=-=- navigate to the home page
        navhome('/')
        // =-=-=-=-=-=-=-=-=-=-=-=- success login
        toast.info('Login success!', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
          // =-=-=-=-=-=-=-=-=-=-=-=- store the user data
      dispach(userData(user))
      localStorage.setItem('userInfo' , JSON.stringify(user))

      }else{
        toast.error('Email is not verified!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }

  })
  .catch((error) => {
    const errorCode = error.code;
// -====================- error run
     if(errorCode){
      toast.error('Something wrong!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
     }
     
  });
}

}

  return (
    <>

<div className="Reg">
  <div className="container">

<div className="allCon">
<div className="regDev">
        <div className="mainReg">
          <div className="regText">
            <h2>Log in</h2>
            <div className="inputAll">
{/*  =-=-=-=-=-=-=-=-=-=-=-=-=-=- user email */}
             <p className='customErr'>{error.emailError}</p>
             <input onChange={(e)=>{setformData((prev)=>({...prev ,userEmail:e.target.value})), setError((prev)=>({...prev ,emailError :""}))}} placeholder='Enter your email' type="email" />
 {/*  =-=-=-=-=-=-=-=-=-=-=-=-=-=- user pssword */}
                <p className='customErr'>{error.passwordError}</p>
              <div className="pass">
                <input onChange={(e)=>{setformData((prev)=>({...prev ,userPassword: e.target.value})), setError((prev)=>({...prev ,passwordError :""}))}} className='inpPass' placeholder='Set password' type={show?'text' :"password"} />
          {
            show?
                <FaEye onClick={()=>setshow(false)} className='eyeIcon'/>
            :
                <GoEyeClosed onClick={()=>setshow(true)} className='eyeIcon'/>
          }
              </div>
              {/* =---------------= link path */}
             <div className="have_account">
             <p>Don't have an acount? <Link to="/register">Register</Link> </p>
             </div>
            </div>
            <button onClick={handelBut} type="submit" >Log in</button>
          
          </div>
        </div>
</div>
</div>

  </div>
</div>

    </>
  )
}

export default Register