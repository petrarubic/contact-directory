import { useNavigate } from "react-router-dom";
import LoginForm from "../components/forms/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <LoginForm
        handleLogin={(values) => {
          const currentDate = new Date().toISOString();
          const token = `${values.email}-${currentDate}`;
          localStorage.setItem("X-token", token);
          navigate("/contacts");
        }}
      />
    </div>
  );
};

export default LoginPage;
