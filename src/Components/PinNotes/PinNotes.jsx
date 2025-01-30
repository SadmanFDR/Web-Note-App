import { getDatabase, onValue, ref, update } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const PinNotes = () => {

// ================      redux data
const creator = useSelector((tower)=>tower.allUser.value)

// ==================      state decraration
   const [showop , setshowop] = useState(false)
   const [allNotes, setallNotes] = useState([]);
   const [uniqeCard , setuniquCard] = useState('')


// console.log(allNotes)

  //  ===============   
  const db = getDatabase();


  // ===============   firebase database
  const notesRef = ref(db, 'AllNote/');


//   // ===================     handelPin
const handelPin = (UnpinNoteData)=>{
update(ref(db, 'AllNote/' + UnpinNoteData.key),{
  pin:false
  
})
setshowop(false)
}



  // ===============   return database data
  useEffect(() => {
    onValue(notesRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
         if(item.val().UserId == creator.uid  && item.val().pin == true){
          arr.push({...item.val() , key:item.key})
         }
      });
      setallNotes(arr); // Update state once with fetched data
    });
  }, []); // Empty array ensures it runs only once


  return (
    <>

          <div className="flex flex-wrap gap-4 p-2 ">
              {allNotes.map((item) => (
                <div
                key={item.key}
                style={{background:item.bgColor}}
                className="p-3 w-full h-[100px] md:w-[200px] md:h-[200px] relative border-dotted border-[2px] border-gray-400 rounded-lg"
                >
                <div className='cardIcon  absolute top-2 right-2 '>
                  <BsThreeDotsVertical onClick={()=>{setshowop(!showop), setuniquCard(item)}} className='text-xl rounded-md dark:text-black text-white dark:bg-white bg-black cursor-pointer text-end'/>
                  {
                    showop && uniqeCard.key == item.key&&
                  <div className="bar z-40 absolute top-full right-2 flex flex-col mt-[6px] bg-slate-600 rounded-md">
                    <button className='px-[4px] hover:bg-gray-800 font-semibold hover:text-gray-200 duration-300 transition-all  text-white rounded-md text-[13px]'>Edit</button>
                    <hr />
                    <button onClick={()=>handelPin(item)} className='px-[4px] hover:bg-gray-800 font-semibold hover:text-gray-200 duration-300 transition-all text-white rounded-md text-[13px]'>Unpin</button>
                    <hr />
                    <button className='px-[4px] hover:bg-gray-800 font-semibold hover:text-gray-200 duration-300 transition-all text-white rounded-md text-[13px]'>Remove</button>
                  </div>
                  }
      
                </div>
                <h2 style={{color  : item.textColor}} className="text-gray-600 text-xl font-semibold font-Capital">
                    {item.todoTitle}
                  </h2>
                  <hr className='mt-[2px] mb-[2px]'/>
                  <p style={{color  : item.textColor}} className="text-[14px] text-gray-500 font-normal text-center leading-5">
                    {item.todoNote}
                  </p>
                </div>
              ))}
            </div>
    
    </>
  )
}

export default PinNotes