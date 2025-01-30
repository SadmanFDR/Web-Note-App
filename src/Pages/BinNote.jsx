import React from 'react'
import Trash from '../Components/Trash/Trash'

const BinNote = () => {
  return (
    < >
  
    <div className='p-1  font-SmallFont dark:bg-slate-100 dark:text-black text-white text-2xl bg-black flex-col gap-2 flex w-full h-[100vh]'>
      <h2 className='text-center mt-2 mb-3'>This is BinNote</h2>
      <Trash/>
    </div>
    </>
  )
}

export default BinNote