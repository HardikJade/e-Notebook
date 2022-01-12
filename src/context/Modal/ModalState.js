import ModalContext from './ModalContext' 
import { useState } from 'react'
const ModalState = (props)=>{
    const [state, setstate] = useState('Hello')
    return(
        <ModalContext.Provider value = {{state,setstate}}>
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalState