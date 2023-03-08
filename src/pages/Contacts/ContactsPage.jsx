import useRequireAuth from "../../utils/useRequireAuth";

const ContactsPage = () => {
  useRequireAuth();
  return (
    <div>
      <h1>Contacts</h1>
    </div>
  );
};

export default ContactsPage;
