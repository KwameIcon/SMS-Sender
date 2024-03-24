import React from 'react';

import './create-template.styles.scss'

import { faInbox } from '@fortawesome/free-solid-svg-icons';
import MessageStructure from '../structure-component/message-structure.component';

const CreateTemplate = () => (
  
    <MessageStructure faIcon={faInbox} title= 'Create Template'/>
  );

export default CreateTemplate;