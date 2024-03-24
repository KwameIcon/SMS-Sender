import React from "react";


import './send-message-page.styles.scss'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import ContentContainer from '../../component/content-container/content-container.component';
import Textarea from "../../component/textarea/textarea.component";
import Button from '../../component/button-component/buton.component';
import USER_DATA from "../../component/user-data/user-data";
import SendButton from "../../component/send-button/send-button.component";

class SendMessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContacts: [],
      isLoggedIn: false,
      userName: '',
      message: '',
    };
  }


  componentDidMount() {
    const currentUser = USER_DATA.find((user) => user.id === 5);
    if (currentUser) {
      this.setState({
        isLoggedIn: true,
        userName: currentUser.name,
      });
    } else {
      this.setState({ isLoggedIn: false });
    }
  }



  handleContactSelect = (event) => {
    const previousContact = {};
    for(let i = 0; i < this.state.selectedContacts.length; i++){
        if(this.state.selectedContacts[i] !== ''){
            previousContact[this.state.selectedContacts[i]] = 'presents';
        }
    }
    const newSelectedContacts = Array.from(event.target.selectedOptions, (option) => option.value);
    if(previousContact[newSelectedContacts]){
        alert('already added!');
    }else{
        this.setState((prevState) => ({
        selectedContacts: [...prevState.selectedContacts, ...newSelectedContacts], 
        }));
    }
  };



  handleContactRemove = (contact) => {
    this.setState((prevState) => ({
      selectedContacts: prevState.selectedContacts.filter(c => c !== contact),
    }));
  };



  handleTextareaChange = (event) => {
    let message = event.target.value;
    message = message.replace(/[^\w\s]/gi, '');
    if (message.length > 100) {
      message = message.substr(0, 100);
    }
    this.setState({ message });
  };



  handleFormSubmission = (ev) => {
    ev.preventDefault();
    const { selectedContacts, message } = this.state;
  
    if (selectedContacts.length === 0) {
      alert("Please select at least one recipient.");
      return;
    }
  
    if (message === "") {
      alert("Please enter a message.");
      return;
    }
  
    alert("Form submitted successfully!");
  
    this.setState({
      selectedContacts: [],
      message: ""
    });
  };


  renderSelectedContacts = () => {
    const { selectedContacts } = this.state;

    return selectedContacts.map(contact => (
      <span key={contact} className="selected-contact">
        {contact}
        <FontAwesomeIcon
          icon={faTimes}
          className="close-button"
          onClick={() => this.handleContactRemove(contact)}
        />
      </span>
    ));
  };

  render() {
    const {userName, message } = this.state;

    return (
      <ContentContainer>
        <div className="send-message-container">
          <h1 className="title">Craft and Send Personalized Message to Recipient</h1>

          <div className="message-field">

            <div className="sender">
              <span className="from">From: </span>
              <div className="fromOutputField">{userName}</div>
            </div>
            
            <div className="recipient">
              <span className="to">To: </span>
              <div className="contact-list">
                <div className="contact">
                  <span className="contact-button">Saved Contacts</span>
                  <select className="selection" onChange={this.handleContactSelect} multiple>
                    {USER_DATA.map(user => (
                      <option key={user.id} value={user.name}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="selected-contacts">{this.renderSelectedContacts()}</div>
              </div>
            </div>


            <div className="textarea-container">
              <Textarea
                className="textarea"
                value={message}
                handleTextarea={this.handleTextareaChange}
              />
              <div className="actions">
                <Button link="/" className="template-button">Save as Template</Button>
                <SendButton submit='submit' handleFormSubmission={this.handleFormSubmission} className="send-button">
                  <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                </SendButton>
              </div>
            </div>
          </div>

          <div className="deduction-info">
            Sending SMS will lead to deduction of appropriate value from your wallet
          </div>
        </div>
      </ContentContainer>
    );
  }
}

export default SendMessagePage;