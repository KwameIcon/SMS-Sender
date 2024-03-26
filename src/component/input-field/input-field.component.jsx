import React from "react";
import "./input-field.styles.scss";

const InputField = ({ type, name, placeholder, handleInputValue, value, required, className }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={handleInputValue}
      value={value}
      placeholder={placeholder}
      required={required}
      className={`${className} inputField`}
    />
  );
};

export default InputField;