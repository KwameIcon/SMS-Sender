import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import ContentContainer from "../../component/content-container/content-container.component";
import Button from "../../component/button-component/buton.component";
import InputField from "../../component/input-field/input-field.component";

import "./view-contact-page.styles.scss";

const ViewContactPage = () => {
  const [contactData, setContactData] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedFieldValue, setSelectedFieldValue] = useState("");
  const [newFieldValue, setNewFieldValue] = useState("");
  const [showEditSection, setShowEditSection] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("contactData"));
    setContactData(storedData);
  }, []);

  function handleSearchValue() {
    // Handle search functionality here
  }

  const handleDeleteContact = (contact) => {
    const updatedData = contactData.filter((c) => c !== contact);
    localStorage.setItem("contactData", JSON.stringify(updatedData));
    setContactData(updatedData);
  };

  const handleEditContact = (contact) => {
    setSelectedContact(contact);
    setShowEditSection(true);
  };

  const handleCancelEdit = () => {
    setSelectedContact(null);
    setShowEditSection(false);
  };

  const handleUpdateContact = () => {
    const updatedData = [...contactData];
    const index = updatedData.findIndex((contact) => contact === selectedContact);

    if (selectedFieldValue && newFieldValue) {
      updatedData[index] = {
        ...selectedContact,
        [selectedFieldValue]: newFieldValue,
      };
    } else {
      console.error("Please select a field and enter a new value"); 
      return;
    }

    localStorage.setItem("contactData", JSON.stringify(updatedData));
    setContactData(updatedData);
    setSelectedContact(null);
    setShowEditSection(false);
    setNewFieldValue(""); 
  };

  return (
    <ContentContainer>
      <div className="view-contact-container">
        <div className="header-element">
          <Button link={"/dashboard/create-contact"} className="new-contact-button">
            Add New Contact
          </Button>
          <InputField type="search" name="searchField" className="search-field"
            handleInputValue={handleSearchValue}
            placeholder="Search a contact"
          />
          <div className="num-of-contacts">
            <span className="text">Number of Contacts</span>
            <span className="value">{contactData ? contactData.length : 0}</span>
          </div>
        </div>

        <div className="contact-content-container">
          <div className="contact-headers">
            <span className="name lastname">Last Name</span>
            <span className="name email">Email</span>
            <span className="name number">Number</span>
            <span className="name contact-info">Contact Information</span>
            <span className="name data">Date Created</span>
            <span className="name action">Actions</span>
          </div>

          {contactData ? (
            contactData.map((contact) => (
              <div className="content" key={contact.number}>
                <span className="name lastname">{contact.lName}</span>
                <span className="name email">{contact.email}</span>
                <span className="name number">{contact.number}</span>
                <span className="name contact-info">{contact.info}</span>
                <span className="name data">{contact.currentDate}</span>
                <span className="name action">
                  <span className="delete">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon"
                      onClick={() => handleDeleteContact(contact)}
                    />
                  </span>
                  <span className="edit">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="icon"
                      onClick={() => handleEditContact(contact)}
                    />
                  </span>
                </span>
              </div>
            ))
          ) : (
            <div className="display-message">There are no contacts created!</div>
          )}
        </div>

        {showEditSection && (
          <div className="edit-section">
            <h3>Edit Contact</h3>
            <div className="edit-form">
              <div className="form-group">
                <label htmlFor="edit-field">Select Field:</label>
                <select id="edit-field" onChange={(event) => setSelectedFieldValue(event.target.value)}>
                  <option value="fName">First Name</option>
                  <option value="mName">Middle Name</option>
                  <option value="lName">Last Name</option>
                  <option value="email">Email</option>
                  <option value="number">Number</option>
                  <option value="info">Contact Information</option>
                </select>
              </div>
              <div className="form-group">
                    <label htmlFor="edit-value">New Value:</label>
                    <input type="text" id="edit-value" value={newFieldValue}
                    onChange={(event) => setNewFieldValue(event.target.value)}
                    />
                </div>

                <div className="actions">
                    <button onClick={handleCancelEdit}>Cancel</button>
                    <button onClick={handleUpdateContact}>Update</button>
                    
                </div>
                
            </div>
          </div>
        )}
      </div>
    </ContentContainer>
  );
};

export default ViewContactPage;