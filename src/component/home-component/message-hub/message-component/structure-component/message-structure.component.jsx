import React from 'react';

import './message-structure.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import PhoneLikeComponent from '../../../../phone-like-component/phone-like.component';
import Button from '../../../../button-component/buton.component';

const MessageStructure = ({className, faIcon, title}) => (
  
    <div className={`message-template ${className}`}>
        <PhoneLikeComponent className="phone-like-container">
            <FontAwesomeIcon icon={faIcon} className='icon'/>
        </PhoneLikeComponent>
        <div className='text'>
            <h3 className='title'>{title}</h3>
            <Button link={'/'} className= 'template-button'><FontAwesomeIcon icon={faHandPointRight} className='icon'/></Button>
        </div>
    </div>
  );

export default MessageStructure;