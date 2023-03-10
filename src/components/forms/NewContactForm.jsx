import { Form, Formik } from "formik";
import { FormTitle, SubmitButton } from "./styled";
import { ContactValidationSchema, initialContactValues } from "./validators";
import InputField from "../inputs/InputField";
import {
  getValueFromContactTypeKeys,
  getValueFromContactTypeLabels,
  InputKeys,
  InputLabels,
  InputTypes,
} from "../inputs/inputs";
import SelectInputField from "../inputs/SelectInputField";
import { useState } from "react";

const NewContactForm = ({ handleAddContact }) => {
  const [contactTypesCount, setContactTypesCount] = useState({
    [InputKeys.MOBILE]: 0,
    [InputKeys.PHONE]: 0,
    [InputKeys.PAGER]: 0,
    [InputKeys.EMAIL]: 0,
  });

  const [selectedContactTypes, setSelectedContactTypes] = useState([]);

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    setContactTypesCount({
      ...contactTypesCount,
      [selectedOption]: contactTypesCount[selectedOption] + 1,
    });
    setSelectedContactTypes([...selectedContactTypes, selectedOption]);
  };

  return (
    <div>
      <FormTitle>Add New Contact</FormTitle>
      <Formik
        initialValues={initialContactValues}
        validationSchema={ContactValidationSchema}
        onSubmit={handleAddContact}
      >
        {({ errors, touched }) => (
          <Form>
            <InputField
              label={InputLabels.FIRSTNAME}
              id={InputKeys.FIRSTNAME}
              name={InputKeys.FIRSTNAME}
              type={InputTypes.TEXT}
              errors={errors}
              touched={touched}
            />
            <InputField
              label={InputLabels.LASTNAME}
              id={InputKeys.LASTNAME}
              name={InputKeys.LASTNAME}
              type={InputTypes.TEXT}
              errors={errors}
              touched={touched}
            />
            <InputField
              label={InputLabels.DOB}
              id={InputKeys.DOB}
              name={InputKeys.DOB}
              type={InputTypes.DATE}
              errors={errors}
              touched={touched}
            />
            <SelectInputField
              label={InputLabels.CONTACTTYPE}
              id={InputKeys.CONTACTTYPE}
              name={InputKeys.CONTACTTYPE}
              errors={errors}
              touched={touched}
              options={["Mobile", "Phone", "Pager", "Email"]}
              onChange={handleSelectChange}
            />
            {selectedContactTypes.map((contactType) => (
              <InputField
                key={contactType + contactTypesCount[contactType]}
                label={
                  getValueFromContactTypeLabels(contactType) +
                  contactTypesCount[contactType]
                }
                id={
                  getValueFromContactTypeKeys(contactType) +
                  contactTypesCount[contactType]
                }
                name={
                  getValueFromContactTypeKeys(contactType) +
                  contactTypesCount[contactType]
                }
                type={
                  contactType === InputKeys.EMAIL
                    ? InputTypes.EMAIL
                    : InputTypes.TEL
                }
                errors={errors}
                touched={touched}
              />
            ))}
            <SubmitButton type="submit">Add</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewContactForm;
