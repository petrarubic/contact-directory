import { Form, Formik } from "formik";
import { InputKeys, InputLabels, InputTypes } from "../inputs/inputs";
import InputField from "../inputs/InputField";
import { initialLoginValues, LoginValidationSchema } from "./validators";
import { SubmitButton, FormTitle } from "./styled";

const LoginForm = ({ handleLogin }) => {
  return (
    <div>
      <FormTitle>Login</FormTitle>
      <Formik
        initialValues={initialLoginValues}
        validationSchema={LoginValidationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <InputField
              label={InputLabels.EMAIL}
              id={InputKeys.EMAIL}
              name={InputKeys.EMAIL}
              type={InputTypes.EMAIL}
              errors={errors}
              touched={touched}
            />
            <InputField
              label={InputLabels.PASSWORD}
              id={InputKeys.PASSWORD}
              name={InputKeys.PASSWORD}
              type={InputTypes.PASSWORD}
              errors={errors}
              touched={touched}
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
