
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './Components/Register/Register'
import app from './firebas.config'
import { ToastContainer } from 'react-toastify'
import Login from './Components/Login/Login'
import LayoutOne from './LayoutOne/LayoutOne'
import Home from './Pages/Home'
import PinNote from './Pages/pinNote'
import BinNote from './Pages/binNote'
import AllNote from './Pages/AllNote'


function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
     <Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<LayoutOne/>}>
      <Route index element ={<Home/>}/>
        <Route path='/allNote'element ={<AllNote/>}/>
        <Route path='/pinNote' element={<PinNote/>}/>
        <Route path= '/binNote' element={<BinNote/>}/>
      </Route>
     </Route>
    )
  )

  return (
    <>
   <RouterProvider router={myRoute}/>
   <ToastContainer />
    </>
  )
}

export default App
