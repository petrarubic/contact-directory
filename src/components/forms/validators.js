import * as Yup from "yup";

export const initialLoginValues = {
  email: "",
  password: "",
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
