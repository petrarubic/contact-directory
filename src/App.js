import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";

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
