import React from 'react';

import './recent-message.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Card from '../../card/card.component';

import Button from '../../button-component/buton.component';

class RecentMessage extends React.Component{
  
    render(){
        
        return (
            <Card className= "recent-messages">
              <div className='header'>
                <div className='fontIcon'>
                    <FontAwesomeIcon icon={faClock} className='icon'/>
                </div>
                <div className='title'>Recent Messages</div>
              </div>
              <div className='content'>
                <div className='actions'>
                    <Button link={'/'} className= 'received-button'>Received</Button>
                    <Button link={'/'} className= 'sent-button'>Sent</Button>
                </div>
                <div className='messages-box'>
                    <div className='stateText'>
                    <section className='date'>
                        <span className='date-text'>
                            Date
                        </span>
                        <span className='date-value'>
                            
                        </span>
                    </section>
                    <section className='message'>
                        <span className='message-text'>
                            Message
                        </span>
                        <span className='message-value'>

                        </span>
                    </section>
                    <section className='sent'>
                        <span className='sent-text'>
                            Sent From
                        </span>
                        <span className='sent-value'>

                        </span>
                    </section>
                    </div>
                    <div className='showState'>You are all caught up! There are no unread message.</div>
                    <Button link={'/'} className='view-inbox'>View Inbox</Button>
                </div>
              </div>
            </Card>
          );
    }
};

export default RecentMessage;