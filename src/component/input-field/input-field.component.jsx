import React from "react";

import './input-field.styles.scss'


const InputField = ({type, name, placeholder, value, required, className}) => {

    return (
        <form>
            <input type= {type} name= {name} value={value} placeholder= {placeholder} required = {required} className= {`${className} inputField`}/>
        </form>
    )
}

export default InputField;