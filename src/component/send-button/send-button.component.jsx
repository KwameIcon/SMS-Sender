import React from "react";

import './send-button.styles.scss';


const SendButton = ({submit, className, children, handleFormSubmission}) => {

    return(
        <form onSubmit={handleFormSubmission}>
            <button type= {submit} className= {className}>{children}</button>
        </form>
    )
}

export default SendButton;