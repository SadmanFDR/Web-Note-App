import React, { useState } from 'react'
import './Register.css'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth";
import { Bounce , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
// ========== firebase take data
const auth = getAuth();
// ===========  navigate
const navigate = useNavigate()

// =========eye fun 
const [show , setshow] = useState(true)
const [formData , setformData] =useState({userName :"" , userEmail :"" , userPassword :"" })
const [error , setError] = useState({userError:"" , emailError:"" , passwordError:""})
const [errorBor , setErrorBor] = useState({borName:"" ,borEmail:"" ,borPassword:""})

// ===============    error text
const handelBut = (e)=>{
  // ========== for text
  e.preventDefault()
if(formData.userName == "")
   setError((prev)=>({...prev , userError: "Plise fullfill this form"}))
  if(formData.userEmail == "")
    setError((prev)=>({...prev , emailError:"Plise fullfill this form"}))
  if(formData.userPassword == "")
    setError((prev)=>({...prev ,passwordError :"Plise fullfill this form"}))
  // ========== for button
else{
  createUserWithEmailAndPassword(auth, formData.userEmail, formData.userPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    const auth = getAuth();
// ============ upload user profile
updateProfile(auth.currentUser, {
  displayName: formData.userName, photoURL: "https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg"
}).then(() => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // ============  navigate login 
    navigate('/login')
    // ============  success tostify

    toast.info('Verification has been sent', {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      console.log(user)
}).catch((error) => {
 
}); 

      });
    
      })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode)
    
    // ==============  something wrong
if(errorCode){
  toast.error('This email has already been taken!', {
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
// ==========  This password is so weak.
if(errorCode=="auth/weak-password"){
  toast.error('This password is so weak.!', {
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
  <h1>Please create an account!</h1>
        <div className="mainReg">
          <div className="regText">
            <h2>Register</h2>
            <div className="inputAll">
       {/*  =-=-=-=-=-=-=-=-=-=-=-=-=-=- user name */}
              <p className='customErr'>{error.userError}</p>
             <input onChange={(e)=>{setformData((prev)=>({...prev , userName:e.target.value})),setError((prev)=>({...prev , userError: ""}))}} placeholder='Enter your name...' type="text" />
      {/*  =-=-=-=-=-=-=-=-=-=-=-=-=-=- user email */}
             <p className='customErr'>{error.emailError}</p>
             <input onChange={(e)=>{setformData((prev)=>({...prev ,userEmail:e.target.value})), setError((prev)=>({...prev ,emailError :""}))}} placeholder='Enter your email' type="email" />
      {/*  =-=-=-=-=-=-=-=-=-=-=-=-=-=- user password */}
                <p className='customErr'>{error.passwordError}</p>
              <div className="pass">
                <input onChange={(e)=>{setformData((prev)=>({...prev ,userPassword: e.target.value})), setError((prev)=>({...prev ,passwordError :""}))}} className='inpPass' placeholder='Set password' type={show?'text' :"password"} />
         {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-     eye fun */}
         {
            show?
                <FaEye onClick={()=>setshow(false)} className='eyeIcon'/>
            :
                <GoEyeClosed onClick={()=>setshow(true)} className='eyeIcon'/>
          }
              </div>
{/* /===================== link path */}
             <div className="have_account">
             <p>Already have an acount? <Link to="/login">Login</Link> </p>
             </div>
            </div>
            <button onClick={handelBut} type="submit" >Submit</button>
            <div className="Icon">
              <Link to="https://www.google.com/"><FaGoogle /></Link>
              <Link to="https://www.facebook.com/"><TiSocialFacebook />
              </Link>
              <Link to="https://support.apple.com/"><FaApple />
              </Link>
            </div>
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