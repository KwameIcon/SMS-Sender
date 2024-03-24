import React from 'react';

import './create-message.styles.scss'

import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import MessageStructure from '../structure-component/message-structure.component';

const CreateContact = () => (
  
    <MessageStructure faIcon={faUserPlus} title= 'Create Contacts'/>
  );

export default CreateContact;