import React from "react";

import './prompt.styles.scss'

const MessagePrompt = ({style, className, children}) => {


    return(
        <div style={style} className={className}>{children}</div>
    )
}

export default MessagePrompt;