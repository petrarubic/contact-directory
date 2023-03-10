export const InputKeys = {
  EMAIL: "email",
  PASSWORD: "password",
  FIRSTNAME: "firstName",
  LASTNAME: "lastName",
  DOB: "dob",
  CONTACTTYPE: "contactType",
  PHONE: "phone",
  PAGER: "pager",
  MOBILE: "mobile",
};

export const getValueFromContactTypeKeys = (inputValue) => {
  switch (inputValue) {
    case "email":
      return InputKeys.EMAIL;
    case "phone":
      return InputKeys.PHONE;
    case "pager":
      return InputKeys.PAGER;
    case "mobile":
      return InputKeys.MOBILE;
    default:
      return null;
  }
};

export const InputTypes = {
  EMAIL: "email",
  PASSWORD: "password",
  TEXT: "text",
  DATE: "date",
  TEL: "tel",
};

export const InputLabels = {
  EMAIL: "Email",
  PASSWORD: "Password",
  FIRSTNAME: "First Name",
  LASTNAME: "Last Name",
  DOB: "Date of Birth",
  CONTACTTYPE: "Contact Type",
  PHONE: "Phone",
  PAGER: "Pager",
  MOBILE: "Mobile",
};

export const getValueFromContactTypeLabels = (inputValue) => {
  switch (inputValue) {
    case "email":
      return InputLabels.EMAIL;
    case "phone":
      return InputLabels.PHONE;
    case "pager":
      return InputLabels.PAGER;
    case "mobile":
      return InputLabels.MOBILE;
    default:
      return null;
  }
};
