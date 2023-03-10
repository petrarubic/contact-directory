import { useState } from "react";
import NewContactForm from "../../components/forms/NewContactForm";
import CustomModal from "../../components/shared/CustomModal";
import useRequireAuth from "../../utils/useRequireAuth";
import { addContact } from "../../service/api";

const ContactsPage = () => {
  useRequireAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={toggleModal}>Add Contact</button>
      <CustomModal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <NewContactForm
          handleAddContact={(values) => {
            addContact({
              firstName: values.firstName,
              lastName: values.lastName,
              dob: values.dob,
              contacts: values.contacts,
            });
          }}
        />
      </CustomModal>
    </div>
  );
};

export default ContactsPage;
