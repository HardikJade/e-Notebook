import React,{useContext} from 'react'
import noteContext from "../context/Notes/NoteContext";
export const NoteItem = (props) => {
    const edit_me = (e)=>{console.log('Edit')}
    const {deleteNote} = useContext(noteContext)
    return (
        <>
            <div className="card col-6 m-2" id={props.data._id} style={{'width':'500px'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.tag}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.date}</h6>
                    <p className="card-text">{props.data.description}</p>
                    <button onClick={edit_me} className="btn btn-primary mx-2">Edit</button>
                    <button onClick={()=>{deleteNote(props.data._id)}} className="btn btn-danger mx-2">Delete</button>
                </div>
            </div>
        </>
    );
}
