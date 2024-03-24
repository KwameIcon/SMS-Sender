import React from 'react';

import './message-history.styles.scss'

import { faHistory } from '@fortawesome/free-solid-svg-icons';
import MessageStructure from '../structure-component/message-structure.component';

const MessageHistory = () => (
  
    <MessageStructure faIcon={faHistory} title= 'Message History'/>
  );

export default MessageHistory;