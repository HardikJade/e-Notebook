import React,{useContext,useEffect} from 'react'
import noteContext from '../context/Notes/NoteContext'
export const About = () => {
    const context = useContext(noteContext)
    // useEffect(() => {
    //     console.log(context.state)
    //     context.setState("HELLO")
    //     console.log(context.state)
    // }, [])
    return (
        <div>
            <h1>This is About {context.state}</h1>
        </div>
    )
}
