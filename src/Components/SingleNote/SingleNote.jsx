
// export default SingleNote
import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useSelector } from 'react-redux';

const SingleNote = () => {
  const creator = useSelector((tower)=>tower.allUser.value)

  const [allNotes, setallNotes] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const notesRef = ref(db, 'AllNote/');
    onValue(notesRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
         if(item.val().UserId == creator.uid){
          arr.push({...item.val() , key:item.key})
         }
      });
      setallNotes(arr); // Update state once with fetched data
    });

    // Cleanup the subscription (optional for real-time listeners)
    return () => {
      // No specific cleanup for Firebase `onValue`
    };
  }, []); // Empty array ensures it runs only once

  return (
    <>
      <div className="flex flex-wrap gap-4 p-2">
        {allNotes.map((item) => (
          <div
            key={item.id}
            style={{background:item.bgColor}}
            className="p-3 w-[200px] h-[200px] border-dotted border-[2px] border-gray-400 rounded-lg"
          >
            <h2 style={{color  : item.textColor}} className="text-gray-600 text-xl font-semibold font-Capital">
              {item.todoTitle}
            </h2>
            <p style={{color  : item.textColor}} className="text-[14px] text-gray-500 font-normal text-center leading-5">
              {item.todoNote}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SingleNote;
