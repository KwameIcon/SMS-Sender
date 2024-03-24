import React from 'react';
import './message-repository.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import Card from '../../card/card.component';


class MessageRepository extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: 'total',
      totalMessages: 100,
      sentMessages: 60,
      draftMessages: 20,
    };
  }

  handleButtonClick = (buttonType) => {
    this.setState({ activeButton: buttonType });
  };

  render() {
    const { activeButton, totalMessages, sentMessages, draftMessages } = this.state;

    let progressBarPercentage = 100;
    let progressBarValue = '';
    if (activeButton === 'sent') {
      progressBarPercentage = (sentMessages / totalMessages) * 100;
      progressBarValue = `${sentMessages}/${totalMessages}`;
    } else if (activeButton === 'draft') {
      progressBarPercentage = (draftMessages / totalMessages) * 100;
      progressBarValue = `${draftMessages}/${totalMessages}`;
    } else {
      progressBarValue = `${totalMessages}/${totalMessages}`;
    }

    return (
      <Card className="message-repository">
        <div className="header">
          <div className="fontIcon">
            <FontAwesomeIcon icon={faArchive} className="icon" />
          </div>
          <div className="title">Message Repository</div>
        </div>
        <section className="content">
          <div className="buttons">
            <button
              className={activeButton === 'sent' ? 'active' : ''}
              onClick={() => this.handleButtonClick('sent')}
            >
              Sent
            </button>
            <button
              className={activeButton === 'draft' ? 'active' : ''}
              onClick={() => this.handleButtonClick('draft')}
            >
              Draft
            </button>
            <button
              className={activeButton === 'total' ? 'active' : ''}
              onClick={() => this.handleButtonClick('total')}
            >
              Total
            </button>
          </div>
          <div className="progress-bar">
            <progress id="file" value={progressBarPercentage} max="100"></progress>
            <span className="progress-bar-value">{progressBarValue}</span>
          </div>
        </section>
      </Card>
    );
  }
}

export default MessageRepository;