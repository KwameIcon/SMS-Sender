import React from "react";

import './button.styles.scss'

import { Link } from "react-router-dom";

const Button = ({link, className, children}) => {

    return(
        <Link to={link} className={`${className} send-button`}>{children}</Link>
    )
}

export default Button;