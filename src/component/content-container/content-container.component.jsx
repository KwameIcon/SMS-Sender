import React from "react";
import './content-container.styles.scss'


const ContentContainer = ({children}) => (
    <section className="container">{children}</section>
)

export default ContentContainer;