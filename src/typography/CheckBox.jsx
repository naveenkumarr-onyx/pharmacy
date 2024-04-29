import React from "react";

const CheckBox = ({ title }) => {
  return (
    <div className="Checkbox-Container">
      <input type="checkbox" />
      <label htmlFor="">{title}</label>
    </div>
  );
};

export default CheckBox;
