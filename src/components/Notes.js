import React,{useContext, useEffect} from 'react'
import noteContext from '../context/Notes/NoteContext'
import { NoteItem } from './NoteItem'
export const Notes = (props) => {
    
    const context = useContext(noteContext)
    const {notes,setNotes} = context
    return(
        <>
            <div className="row">
                {notes.map((element)=>{return <NoteItem key={element._id} data = {element} />})}
            </div>
        </>
        )
}
