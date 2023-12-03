import React from "react";

const FormRow = ({ type, value, name, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormRow;
