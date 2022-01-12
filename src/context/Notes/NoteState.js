import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props)=>{
    const rawNote = []
    const [notes, setNotes] = useState(rawNote)    
    //Fetch The Note From Database
    const getNote =  async ()=>{
      const response = await fetch(`${process.env.REACT_APP_DOMAIN_NAME}api/notes/get-note`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiI2MWRkN2VlZWYxMTM0MTkwMzY0ZjRmYzMifSwiaWF0IjoxNjQxOTIyNzE3fQ.kfP47WJ9oolRuLh1jUK5HYwbgwtyz8R2-JXD3xB79fU'
        }
      });
      let data = await response.json()
      setNotes(data)
    }
      //Add a Note
      const addNote = async (title,description,tag)=>{
        //Logic To Append The Data In Backend
        if(title && description){            
          const response = await fetch(`${process.env.REACT_APP_DOMAIN_NAME}api/notes/save-note`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiI2MWRkN2VlZWYxMTM0MTkwMzY0ZjRmYzMifSwiaWF0IjoxNjQxOTIyNzE3fQ.kfP47WJ9oolRuLh1jUK5HYwbgwtyz8R2-JXD3xB79fU'
            },
            body : JSON.stringify(
              {
                "title" : title,
                "description" : description,
                "tag" : tag
              }
            )
          });
          let data = await response.json()
          if(data.error.type === 'Success'){
            let note = {
              "_id": data.id,
              "title": title,
              "description": description,
              "tag": tag,
              "date": (new Date()).getTime()
            }
            setNotes(notes.concat(note))
          }
        }

      }
      //Delete A Note
      const deleteNote = async (id)=>{
        //Logic To Delete The Data From Backend
        const response = await fetch(`${process.env.REACT_APP_DOMAIN_NAME}api/notes/delete-note/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXIiOiI2MWRkN2VlZWYxMTM0MTkwMzY0ZjRmYzMifSwiaWF0IjoxNjQxOTIyNzE3fQ.kfP47WJ9oolRuLh1jUK5HYwbgwtyz8R2-JXD3xB79fU'
        }
        });
        let data = await response.json();
        if(data.error.type === 'Success'){
          let temp = notes.filter((elem)=>{return elem._id != id.toString()})
          setNotes(temp)
        }
      }
      //Edit A Note
      const editNote = (id,title,description,tag)=>{
        //Add The Call For Update in Database
        deleteNote(id)
        addNote(title,description,tag);
      }
    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNote}}>
            {props.children}
        </noteContext.Provider>
    );
}
export default NoteState;