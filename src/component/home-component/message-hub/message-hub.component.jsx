import React from 'react';

import './message-hub.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import Card from '../../card/card.component';
import MessageTemplate from './message-component/message-template/message-template.component';
import CreateContact from './message-component/create-message/create-message.component';
import MessageHistory from './message-component/message-history/message-history.component';
import CreateTemplate from './message-component/create-template/create-template.component';

class MessageHub extends React.Component{
  
    render(){
        return (
            <Card className= "message-hub">
              <div className='header'>
                <div className='fontIcon'>
                    <FontAwesomeIcon icon={faComments} className='icon'/>
                </div>
                <div className='title'>Message Hub</div>
              </div>
              <section className='content'>
                <CreateTemplate className = 'box'/>   
                <MessageTemplate className= "box"/>
                <CreateContact className = 'box'/>
                <MessageHistory className = 'box'/>
              </section>
            </Card>
          );
    }
};

export default MessageHub;