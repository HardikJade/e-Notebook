import noteContext from "./NoteContext";
import { useState } from "react";
const NoteState = (props)=>{
    let state_s = {"Name" : "Hardik"}
    const [state, setState] = useState(state_s)
    return(
        <noteContext.Provider value={{state: state,setState : setState}}>
            {props.children}
        </noteContext.Provider>
    );
}
export default NoteState;