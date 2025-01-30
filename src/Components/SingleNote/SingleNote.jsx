
// export default SingleNote
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, update, remove, set, push } from 'firebase/database';
import { useSelector } from 'react-redux';
import { BsThreeDotsVertical } from "react-icons/bs";
import Popup from '../Popup/Popup';


const SingleNote = ({}) => {
  // ================      redux data
  const creator = useSelector((tower)=>tower.allUser.value)

// ==================      state decraration
   const [showop , setshowop] = useState(false)
   const [allNotes, setallNotes] = useState([]);
   const [uniqeCard , setuniquCard] = useState('')
   const [showPopup , setshowPopup] = useState(false)
   const [editepopup , seteditepopup] = useState('')

  // ===================   funtion  handelPin 
const handelPin = (pinNoteData)=>{
update(ref(db, 'AllNote/' + pinNoteData.key),{
  pin:true
})
setshowop(false)
}

// =================     funtion Remove


// ======================     funtion handelRemove
const handelRemove =(itemRemove)=>{
  set(push((ref(db, 'BinNote/'))), {
            todoTitle : itemRemove.todoTitle,
            todoNote: itemRemove.todoNote,
            bgColor : itemRemove.bgColor,
            textColor : itemRemove.textColor,
            pin : itemRemove.pin,
            UserId : creator.uid
          });

  // -------------  for remove
  remove(ref(db, 'AllNote/' + itemRemove.key))
}

  //  ===============   
  const db = getDatabase();

  // ===============   firebase database
  const notesRef = ref(db, 'AllNote/');

  // ===============   return database data
  useEffect(() => {
    onValue(notesRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
         if(item.val().UserId == creator.uid && item.val().pin == false){
          arr.push({...item.val() , key:item.key})
         }
      });
      setallNotes(arr); // Update state once with fetched data
    });
  }, []); // Empty array ensures it runs only once


// console.log(editepopup)


  return (
    <>
      <div className="flex flex-wrap justify-center items-center lg:justify-start gap-4 p-2 ">
        {allNotes.map((item) => (
          <div
          key={item.key}
          style={{background:item.bgColor}}
          className="p-3 w-[180px] h-[160px]  md:w-[200px] md:h-[200px] relative border-dotted border-[2px] border-gray-400 rounded-lg overflow-y-auto"
          >
            {/* ======================   three dot custom icons */}
          <div className='cardIcon  absolute top-2 right-2 '>
            <BsThreeDotsVertical onClick={()=>{setshowop(!showop), setuniquCard(item)}} className='text-xl rounded-md dark:text-black text-white dark:bg-white bg-black text-end cursor-pointer'/>
            {
              showop && uniqeCard.key == item.key&&
            <div className="bar absolute top-full right-2 flex flex-col mt-[6px] bg-slate-600 rounded-md">
              <button onClick={()=>{setshowPopup(true) , seteditepopup(item)}} className='px-[4px] hover:bg-gray-800 font-semibold hover:text-gray-200 duration-300 transition-all  text-white rounded-md text-[13px]'>Edit</button>
              <hr />
              <button onClick={()=>handelPin(item)} className='px-[4px] hover:bg-gray-800 font-semibold hover:text-gray-200 duration-300 transition-all text-white rounded-md text-[13px]'>Pin</button>
              <hr />
              <button onClick={()=>handelRemove(item)} className='px-[4px] hover:bg-gray-800 font-semibold hover:text-gray-200 duration-300 transition-all text-white rounded-md text-[13px]'>Remove</button>
            </div>
            }

          </div>
          <h2 style={{color  : item.textColor}} className="text-gray-600 text-xl font-semibold font-Capital break-words">
              {item.todoTitle}
            </h2>
            <hr />
            <p style={{color  : item.textColor}} className="text-[14px] break-words text-gray-500 font-normal text-center leading-5">
              {item.todoNote}
            </p>
          </div>
        ))}
      </div>

      <Popup showvalue={showPopup} popCross={()=>setshowPopup(false)} editeDatavalue={editepopup} />
    </>
  );
};

export default SingleNote;
