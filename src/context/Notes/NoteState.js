import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const rawNote = []
    const [notes, setNotes] = useState(rawNote)
      //Add a Note
      const addNote = (title,description,tag)=>{
        let note = {
          "_id": (new Date()).getTime(),
          "title": title,
          "description": description,
          "tag": tag,
          "date": (new Date()).getTime()
        }
        //Logic To Append The Data In Backend
        setNotes(notes.concat(note))
      }
      //Delete A Note
      const deleteNote = (id)=>{
        //Logic To Delete The Data From Backend
        let temp = notes.filter((elem)=>{return elem._id != id.toString()})
        setNotes(temp);
      }
      //Edit A Note
      const editNote = ()=>{}
    return(
        <noteContext.Provider value={{notes,addNote,deleteNote}}>
            {props.children}
        </noteContext.Provider>
    );
}
export default NoteState;