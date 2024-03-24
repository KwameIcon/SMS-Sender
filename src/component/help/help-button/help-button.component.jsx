import React from "react";

import './help-button.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '../../button-component/buton.component'

const HelpButton = () => {

    return(
        <Button link={'/'} className= 'help-button'>
            <FontAwesomeIcon icon={faQuestionCircle} className="icon"/>
            <span className="text">Help</span>
        </Button>
    )
}

export default HelpButton;