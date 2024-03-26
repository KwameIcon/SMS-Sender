import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import ContentContainer from "../../component/content-container/content-container.component";
import Button from "../../component/button-component/buton.component";
import InputField from "../../component/input-field/input-field.component";

import "./template-log.styles.scss";

const TemplateLog = () => {
  const [templateData, setTemplateData] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedFieldValue, setSelectedFieldValue] = useState("");
  const [newFieldValue, setNewFieldValue] = useState("");
  const [showEditSection, setShowEditSection] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("templateData"));
    setTemplateData(storedData || []); // Set to empty array if no data exists
  }, []);

  const handleSearchValue = () => {
    // Handle search functionality here
  };

  const handleDeleteTemplate = (template) => {
    const updatedData = templateData.filter((item) => item !== template);
    localStorage.setItem("templateData", JSON.stringify(updatedData));
    setTemplateData(updatedData);
  };

  const handleEditTemplate = (template) => {
    setSelectedTemplate(template);
    setShowEditSection(true);
  };

  const handleCancelEdit = () => {
    setSelectedTemplate(null);
    setShowEditSection(false);
    setNewFieldValue("");
  };

  const handleUpdateTemplate = () => {
    if (!selectedFieldValue || !newFieldValue) {
      alert("Please select a field and enter a new value");
      return;
    }

    const updatedData = templateData.map((template) =>
      template === selectedTemplate
        ? {
            ...template,
            [selectedFieldValue]: newFieldValue,
          }
        : template
    );

    localStorage.setItem("templateData", JSON.stringify(updatedData));
    setTemplateData(updatedData);
    setSelectedTemplate(null);
    setShowEditSection(false);
    setNewFieldValue("");
  };

  return (
    <ContentContainer>
      <div className="view-contact-container">
        <div className="header-element">
          <Button link="/dashboard/create-template" className="new-contact-button">
            Add New Template
          </Button>
          <InputField
            type="search"
            name="searchField"
            className="search-field"
            handleInputValue={handleSearchValue}
            placeholder="Search a template"
          />
          <div className="num-of-contacts">
            <span className="text">Number of Templates</span>
            <span className="value">{templateData.length}</span>
          </div>
        </div>

        <div className="contact-content-container">
          <div className="contact-headers">
            <span className="name lastname">Name</span>
            <span className="name email">Message Content</span>
            <span className="name data">Date Created</span>
            <span className="name action">Actions</span>
          </div>

          {templateData.length > 0 ? (
            templateData.map((template) => (
              <div className="content" key={template.templateName}>
                <span className="name lastname">{template.templateName}</span>
                <span className="name email">{template.message}</span>
                <span className="name data">{template.currentDate}</span>
                <span className="name action">
                  <span className="delete">
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="icon"
                      onClick={() => handleDeleteTemplate(template)}
                    />
                  </span>
                  <span className="edit">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="icon"
                      onClick={() => handleEditTemplate(template)}
                    />
                  </span>
                </span>
              </div>
            ))
          ) : (
            <div className="display-message">There are no templates created!</div>
          )}
        </div>

        {showEditSection && (
          <div className="edit-section">
            <h3>Edit Template</h3>
            <div className="edit-form">
              <div className="form-group">
                <label htmlFor="edit-field">Select Field:</label>
                <select id="edit-field" value={selectedFieldValue} onChange={(event) => setSelectedFieldValue(event.target.value)}>
                  <option value="">Select Field</option>
                  <option value="templateName">Template Name</option>
                  <option value="message">Message</option>
                  <option value="currentDate">Date Created</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="edit-value">New Value:</label>
                <input
                  type="text"
                  id="edit-value"
                  value={newFieldValue}
                  onChange={(event) => setNewFieldValue(event.target.value)}
                />
              </div>
              <div className="actions">
                <Button onClick={() => handleCancelEdit()}>Cancel</Button>
                <Button onClick={() => handleUpdateTemplate()}>Update</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ContentContainer>
  );
};

export default TemplateLog;
