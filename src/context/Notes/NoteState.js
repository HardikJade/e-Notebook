import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const rawNote = [
        {
          "_id": "61ddc88a3de90ff35d83418c",
          "title": "This is the Title",
          "description": "This is the Description",
          "tag": "Tag",
          "date": "1641924746845",
          "__v": 0
        },
        {
          "_id": "61ddc88b3de90ff35d83418e",
          "title": "This is the Title",
          "description": "This is the Description",
          "tag": "Tag",
          "date": "1641924747032",
          "__v": 0
        },
        {
          "_id": "61ddc88b3de90ff35d834190",
          "title": "This is the Title",
          "description": "This is the Description",
          "tag": "Tag",
          "date": "1641924747224",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(rawNote)
    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    );
}
export default NoteState;