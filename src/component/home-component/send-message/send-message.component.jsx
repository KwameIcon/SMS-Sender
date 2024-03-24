import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';
import Card from '../../card/card.component';
import './send-message.styles.scss';
import USER_DATA from "../../user-data/user-data";

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleNavigation() {
    const currentUser = USER_DATA.find((user) => user.id === 5);
    if (currentUser) {
      this.setState({ isLoggedIn: true });
      window.location.href = "/dashboard/send-message";
    } else {
      this.setState({ isLoggedIn: false });
      alert('You have to log in to enjoy SMS-Sender')
      return null
    }
  }

  render() {
    return(
      <Card className="send-message">
        <div className="header">
          <div className="fontIcon-box">
            <FontAwesomeIcon icon={faEnvelopesBulk} className="icon"/>
          </div>
          <span className="title">Send Quick SMS</span>
        </div>
        <div className="box">
          <span className="text">Send SMS to Connect with Your Contacts</span>
          <div onClick={this.handleNavigation.bind(this)} className="send-button">Send Message</div>
        </div>
      </Card>
    );
  }
}

export default SendMessage;