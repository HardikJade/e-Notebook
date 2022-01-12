import React from 'react'
export const NoteItem = (props) => {
    const edit_me = (e)=>{console.log('Edit')}
    const delete_me = (e)=>{console.log('Delete',e)}
    return (
        <>
            <div className="card col m-2" style={{'width':'18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.tag}</h6>
                    <h6 className="card-subtitle mb-2 text-muted">{props.data.date}</h6>
                    <p className="card-text">{props.data.description}</p>
                    <button onClick={edit_me} className="btn btn-primary mx-2">Edit</button>
                    <button onClick={delete_me} className="btn btn-danger mx-2">Delete</button>
                </div>
            </div>
        </>
    );
}
