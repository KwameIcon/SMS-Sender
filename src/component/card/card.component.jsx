import React from "react";

import './card.styles.scss'

const Card = ({className, children}) => (
    <div className= {`card ${className}`} >
        {children}
    </div>
)

export default Card;