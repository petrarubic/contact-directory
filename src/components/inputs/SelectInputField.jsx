import { Field } from "formik";
import React from "react";
import { ErrorsWrapper } from "./styled";

const SelectInputField = ({
  label,
  id,
  name,
  type,
  errors,
  touched,
  options,
  onChange,
}) => {
  return (
    <div>
      <label htmlFor={id} style={{ fontWeight: 500 }}>
        {label}
      </label>
      <br />
      <Field
        as="select"
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        style={{
          marginTop: "5px",
          marginBottom: "10px",
          width: "100%",
          border: "1px solid #c5c5c5",
          padding: "10px",
          borderRadius: "5px",
        }}
        defaultValue="default"
      >
        <option value="default" disabled>
          Choose a contact type
        </option>
        {options.map((option) => (
          <option key={option} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </Field>
      {errors[name] && touched[name] && (
        <ErrorsWrapper>{errors[name]}</ErrorsWrapper>
      )}
    </div>
  );
};

export default SelectInputField;
