import React, { useState, useEffect } from 'react';
import './send-message-page.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import ContentContainer from '../../component/content-container/content-container.component';
import Textarea from '../../component/textarea/textarea.component';
import Button from '../../component/button-component/buton.component';
import USER_DATA from '../../component/user-data/user-data';
import SendButton from '../../component/send-button/send-button.component';

const SendMessagePage = () => {

  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currentUser = USER_DATA.find((user) => user.id === 5);
    setIsLoggedIn(!!currentUser);
    setUserName(currentUser?.name || '');
  }, []);

  const handleContactSelect = (event) => {
    const newSelectedContacts = Array.from(event.target.selectedOptions, (option) => option.value);
    const isContactAdded = selectedContacts.some((contact) => newSelectedContacts.includes(contact));
    if (isContactAdded) {
      alert('Already added!');
    } else {
      setSelectedContacts((prevSelectedContacts) => [...prevSelectedContacts, ...newSelectedContacts]);
    }
  };

  const handleContactRemove = (contact) => {
    setSelectedContacts((prevSelectedContacts) => prevSelectedContacts.filter((c) => c !== contact));
  };

  const handleTextareaChange = (event) => {
    let newMessage = event.target.value;
    if (newMessage.length > 300) {
      alert("Hey! Your template name can't exceed 100 characters");
      newMessage = newMessage.substr(0, 300);
    }
    setMessage(newMessage);
  };

  const handleFormSubmission = (ev) => {
      ev.preventDefault();
      if (selectedContacts.length === 0) {
        alert('Please select at least one recipient.');
        return;
      }

      if (message === '') {
        alert('Please enter a message.');
        return;
      }

      const formData = {
        userName,
        selectedContacts,
        message,
      };

      localStorage.setItem('formData', JSON.stringify(formData));

      alert('Form submitted successfully!');

      const storedFormData = JSON.parse(localStorage.getItem('formData'));
      alert(storedFormData?.userName);
      alert(storedFormData?.selectedContacts);
      alert(storedFormData?.message);

      setSelectedContacts([]);
      setMessage('');
  };


    const renderSelectedContacts = () => {
      return selectedContacts.map((contact) => (
        <span key={contact} className="selected-contact">
        {contact}
        <FontAwesomeIcon
        icon={faTimes}
        className="close-button"
        onClick={() => handleContactRemove(contact)}
        />
        </span>
      ));
    };
      
      return (
        <ContentContainer>
        <div className="send-message-container">
        <h1 className="title">Craft and Send Personalized Message to Recipient</h1>
        <div className="message-field">
          <div className="sender">
            <span className="from">From:</span>
            <div className="outputField">{userName}</div>
          </div>

          <div className="recipient">
            <span className="to">To:</span>
            <div className="contact-list">
              <div className="contact">
                <span className="contact-button">Saved Contacts</span>
                <select className="selection" onChange={handleContactSelect} multiple>
                  {USER_DATA.map((user) => (
                    <option key={user.id} value={user.name}>
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="selected-contacts">{renderSelectedContacts()}</div>
            </div>
          </div>

          <div className="textarea-container">
            <Textarea className="textarea" value={message} handleTextarea={handleTextareaChange} />
            <div className="actions">
              <Button link="/" className="template-button">Save as Template</Button>
              <SendButton submit="submit" handleFormSubmission={handleFormSubmission} className="send-button">
                <FontAwesomeIcon icon={faPaperPlane} className="icon" />
              </SendButton>
            </div>
          </div>
        </div>

        <div className="deduction-info">Sending an SMS will deduct the appropriate value from your wallet.</div>
      </div>
    </ContentContainer>
  )
}

export default SendMessagePage;