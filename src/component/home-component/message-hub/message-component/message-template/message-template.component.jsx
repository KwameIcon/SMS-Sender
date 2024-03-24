import React from 'react';

import './message-template.styles.scss';

import {faFileAlt } from '@fortawesome/free-solid-svg-icons';


import MessageStructure from '../structure-component/message-structure.component';

const MessageTemplate = () => (
  <MessageStructure faIcon={faFileAlt} title="Template" />
);

export default MessageTemplate;