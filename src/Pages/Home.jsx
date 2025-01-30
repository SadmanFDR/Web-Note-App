import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <div className="hom_con w-[100%] h-[100vh] dark:bg-slate-200 bg-slate-800">
      <div className="container">
        <div className="note_think mt-14 lg:mt-[100px] flex flex-wrap justify-between ">
          <div className="for_text flex gap-4 flex-wrap flex-col lg:gap-5">
            <h1 className='text-[30px] mt-6 md:mt-0 text-center  md:text-[35px] font-serif dark:text-black text-white  '>HELLO EVERYONE</h1>
              <p className='w-full lg:w-[400px] xl:w-[500px] text-[18px] lg:text-[22px] text-white dark:text-black'>"Welcome to <span className='text-white text-[20px] lg:text-[24px]  font-bold font-serif dark:text-black'>S-Note</span> – the simplest way to organize your ideas, tasks, and daily notes. Whether it's for work, study, or personal projects, keep everything at your fingertips."</p>
              <Link className='text-[22px] font-semibold font-Capital w-full hover:text-red-950 hover:bg-slate-200 transition-all duration-300 lg:w-[200px] dark:bg-gray-800 dark:hover:bg-slate-300 text-red-100 bg-gray-950 px-3 py-2 rounded-lg text-center' to={'/allNote'}>Add Your First Note</Link>
          </div>
          <img className='w-full md:w-[500px] lg:w-[600px]' src="Images/noteban.jpg" alt="this is my img" />
        </div>
      </div>
     </div>
    </>
  )
}

export default Home