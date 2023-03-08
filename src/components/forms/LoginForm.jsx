import { Field, Form, Formik } from "formik";
import { initialLoginValues, LoginValidationSchema } from "./validators";

const LoginForm = ({ handleLogin }) => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={initialLoginValues}
        validationSchema={LoginValidationSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <Field type="email" id="email" name="email" />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field type="password" id="password" name="password" />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
