import { Field } from "formik";
import React from "react";
import { ErrorsWrapper, FieldWrapper } from "./styled";

const InputField = ({ label, id, name, type, errors, touched }) => {
  return (
    <div>
      <label htmlFor={id} style={{ fontWeight: 500 }}>
        {label}
      </label>
      <FieldWrapper>
        <Field type={type} id={id} name={name} />
      </FieldWrapper>
      {errors[name] && touched[name] && (
        <ErrorsWrapper>{errors[name]}</ErrorsWrapper>
      )}
    </div>
  );
};

export default InputField;
