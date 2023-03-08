import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import ContactsPage from "./pages/Contacts/ContactsPage";
import LoginPage from "./pages/Login/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
