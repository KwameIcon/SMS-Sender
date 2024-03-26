import React, { useState } from "react";

import "./create-contact-page.styles.scss";

import ContentContainer from "../../component/content-container/content-container.component";
import InputField from "../../component/input-field/input-field.component";
import SendButton from "../../component/send-button/send-button.component";
import MessagePrompt from "../../component/prompt/prompt.component";

const CreateContactPage = () => {
  const [fName, setfName] = useState("");
  const [mName, setmName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [info, setInfo] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSuccess, setIsFormSuccess] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "fName":
        setfName(value);
        break;
      case "mName":
        setmName(value);
        break;
      case "lName":
        setlName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "number":
        setNumber(value);
        break;
      case "info":
        setInfo(value);
        break;
      default:
        break;
    }
  };

  const handleSubmitContactInfo = (e) => {
    e.preventDefault();
    if (!fName || !lName || !number) {
      setIsFormSubmitted(true);
      setIsFormSuccess(false);
    } else {
      setIsFormSubmitted(true);
      setIsFormSuccess(true);
    }
  };


  const messageClass = `message ${isFormSubmitted ? 'visible' : 'hidden'}`;
  const messageSuccess = {backgroundColor: isFormSuccess ? '#074936;' : '#ffffff', color: isFormSuccess ? '#ffffff' : 'crimson'};
  

  return (
    <ContentContainer>
      <section className="create-contact">
        <h1 className="create-contact-header">
          Start building your network. Add a new contact today!
        </h1>

        <MessagePrompt style={messageSuccess} className= {messageClass}>{isFormSuccess ? 'Form submitted successfully!' : 'Hey! there, make sure you fill in all required fields!'}</MessagePrompt>

        <div className="wrapper">
          <div className="contact-fName">
            <span className="fName">First Name: </span>
            <InputField type="text" name="fName" handleInputValue={handleInputChange} value={fName}
              className="inputField" placeholder="Contact First Name" required = 'required'/>
          </div>

          <div className="contact-mName">
            <span className="mName">Middle Name: </span>
            <InputField type="text" name="mName"  handleInputValue={handleInputChange} value={mName}
              className="inputField" placeholder="Contact Middle Name (Optional)"/>
          </div>

          <div className="contact-lName">
            <span className="lName">Last Name: </span>
            <InputField type="text" name="lName" handleInputValue={handleInputChange}
              value={lName} className="inputField" placeholder="Contact Last Name" required = 'required'/>
          </div>

          <div className="contact-email">
            <span className="email">Email: </span>
            <InputField type="email" name="email" handleInputValue={handleInputChange} value={email}
              className="inputField optional" placeholder="Contact Email (Optional)"/>
          </div>

          <div className="contact-number num">
            <span className="number">Number: </span>
            <InputField type="text" name="number"  handleInputValue={handleInputChange} value={number}
              className="inputField" placeholder="Contact Number" required = 'required'/>
          </div>

          <div className="contact-info">
            <span className="info">Contact Information: </span>
            <InputField type="text" name="info" handleInputValue={handleInputChange} value={info}
              className="inputField optional" placeholder="Contact Information (eg. Professor, father... (Optional)"/>
          </div>

          <div className="action">
            <SendButton handleFormSubmission={handleSubmitContactInfo} className="button">Create Contact
            </SendButton>
          </div>
        </div>
      </section>
    </ContentContainer>
  );
};

export default CreateContactPage;