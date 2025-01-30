import React from 'react'
import PinNotes from '../Components/PinNotes/PinNotes'

const PinNote = () => {
  return (
    <>
    
<dir  className='p-1 dark:bg-slate-100 dark:text-black text-white text-2xl font-SmallFont bg-black justify-start flex-wrap flex-col gap-2 flex w-full h-[100vh]'>
   <h2 className='text-center mt-2 mb-3'>This is PinNote</h2>
  <PinNotes/>
  
</dir>

    </>
  )
}

export default PinNote