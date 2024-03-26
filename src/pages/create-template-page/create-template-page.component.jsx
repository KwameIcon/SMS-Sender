import React, { useState, useEffect } from 'react';

import './create-template-page.styles.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import ContentContainer from '../../component/content-container/content-container.component';
import Textarea from '../../component/textarea/textarea.component';
import Button from '../../component/button-component/buton.component';
import USER_DATA from '../../component/user-data/user-data';
import SendButton from '../../component/send-button/send-button.component';
import InputField from '../../component/input-field/input-field.component';

const CreateTemplatePage = () => {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [templateName, setTemplateName] = useState('');

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

  const handleTemplateName = (event) => {
    let newTemplateName = event.target.value;
    newTemplateName = newTemplateName.replace(/[^\w\s]/gi, '');
    if (newTemplateName.length > 100) {
      alert("Hey! Your template name can't exceed 100 characters")
      newTemplateName = newTemplateName.substr(0, 100);
    }
    setTemplateName(newTemplateName);
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
      if(!selectedContacts || !message || !templateName){
        alert('Please fill all fields!');
        return;
      }

      const currentDate = new Date().toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'}).replace(/\//g, '/');
      const newTemplate = {
        userName,
        selectedContacts,
        templateName,
        message,
        currentDate,
      };

      const storedData = JSON.parse(localStorage.getItem('templateData'));
      const updatedData = storedData ? [...storedData, newTemplate] : [newTemplate]
      localStorage.setItem('templateData', JSON.stringify(updatedData));

      alert('Form submitted successfully!');

      setSelectedContacts([]);
      setMessage('');
      setTemplateName('');
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

          <div className="template-name">
            <span className="name">Template:</span>
            <InputField value={templateName} handleInputValue={handleTemplateName} className="template-name-inputField" />
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

export default CreateTemplatePage;