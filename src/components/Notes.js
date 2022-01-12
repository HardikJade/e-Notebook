import React,{useContext, useEffect} from 'react'
import noteContext from '../context/Notes/NoteContext'
import { NoteItem } from './NoteItem'
export const Notes = () => {
    const context = useContext(noteContext)
    const {notes} = context
    return(
        <>
            <div className="row d-flex justify-content-center">
                {notes.map((element)=>{return <NoteItem key={element._id} data = {element} />})}
            </div>
        </>
        )
}
