import * as Yup from "yup";

export const initialLoginValues = {
  email: "",
  password: "",
};

export const initialContactValues = {
  firstName: "",
  lastName: "",
  dob: "",
  contacts: [],
};

export const LoginValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least 8 characters, 1 uppercase letter, 1 number, and 1 special character"
    ),
});

export const ContactValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(20, "First name can be up to 20 characters long")
    .required("First name is required"),
  lastName: Yup.string()
    .max(30, "Last name can be up to 30 characters long")
    .required("Last name is required"),
  dob: Yup.date().required("Date of birth is required"),
  contacts: Yup.array().required("Provide at least one contact"),
});
