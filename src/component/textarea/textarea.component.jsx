import React from "react";

import './textarea.styles.scss'


const Textarea = ({type, name, placeholder, value,handleTextarea, required, className}) => {

    return (
        <form>
            <textarea type= {type} name= {name} value={value} onChange={handleTextarea} placeholder= {placeholder} required = {required} className= {`${className} textarea`}/>
        </form>
    )
}

export default Textarea;