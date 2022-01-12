import React,{useContext,useEffect} from 'react'
import noteContext from "../context/Notes/NoteContext";
import ModalContext from '../context/Modal/ModalContext';
export const NoteItem = (props) => {
    const {deleteNote,editNote,getNote} = useContext(noteContext)
    const {state,setstate} = useContext(ModalContext)
    const edit_me =(e)=>{
        let target = e.target.parentNode.children;
        let item = [...target].filter((elem)=>{
            if(elem.id == 'note-title'){return elem}
            if(elem.id == 'note-description'){return elem}
            if(elem.id == 'note-tag'){return elem}
        })
        console.log(item[0].innerText)

        // setstate('World')
        // console.log(state)
        // let modal = document.querySelector("#modal_click");
        // modal.click()
    };
    let date = new Date(parseInt(props.data.date));
    return (
        <>
            <div className="card col-6 m-2" id={props.data._id} style={{'width':'500px'}}>
                <div className="card-body">
                    <h5 id='note-title' className="card-title">{props.data.title}</h5>
                    <h6 id='note-description'  className="card-subtitle mb-2 text-muted">{props.data.tag}</h6>
                    <h6 id='note-tag' className="card-subtitle mb-2 text-muted">{date.toGMTString()}</h6>
                    <p className="card-text">{props.data.description}</p>
                    <button type="button" className="btn btn-primary" id='modal_click' data-toggle="modal" style={{'display' : 'none','visibility' : 'hidden'}} data-target="#myModal"></button>
                    <button type="button" className="btn btn-primary" onClick={edit_me} >Edit</button>
                    <button onClick={()=>{deleteNote(props.data._id)}} className="btn btn-danger mx-2">Delete</button>
                </div>
            </div>
        </>
    );
}
