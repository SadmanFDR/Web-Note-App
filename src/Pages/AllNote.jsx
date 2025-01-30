import React from 'react'
import AddCard from '../Components/AddCard/AddCard'
import SingleNote from '../Components/SingleNote/SingleNote'
import PinNotes from '../Components/PinNotes/PinNotes'
import PinNote from './PinNote'


const AllNote = () => {
  return (
    <>
    <div  className='p-3 dark:bg-slate-100 dark:text-black text-white bg-black text-4xl w-full'>
      {/* =============== coll part */}
      <AddCard/>
          {/* =-=-=-=-=-=-=-=-=-=-=-   all pin */}
          <div>
        <h2 className='text-[18px] lg:text-[25px] font-Capital font-semibold'>Pin Note</h2>
      </div>
      <hr className=' h-[2px] bg-slate-400'/>
      <PinNotes/>
      {/* =-=-=-=-=-=-=-=-=-=-=-   all note */}
      <div>
        <h2 className='text-[18px] lg:text-[25px] font-Capital font-semibold'>All Note</h2>
      </div>
      <hr className=' h-[2px] bg-slate-400'/>
      <SingleNote/> 

      
    </div>
    </>
  )
}

export default AllNote