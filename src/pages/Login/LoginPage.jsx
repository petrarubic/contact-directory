import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/forms/LoginForm";
import {
  AppName,
  ContentWrapper,
  Description,
  LogoWrapper,
  ModalWrapper,
  PageBackground,
  PageWrapper,
  TwoColumnWrapper,
} from "./styled";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <PageBackground />
      <ContentWrapper>
        <ModalWrapper>
          <TwoColumnWrapper>
            <div>
              <LogoWrapper>
                <img
                  src="./images/logo.svg"
                  alt="Logo"
                  width="100%"
                  height="100%"
                />
                <AppName>Connexa</AppName>
              </LogoWrapper>
              <Description>
                Revolutionize your contact management with Connexa - the app
                that puts all your contacts at your fingertips, no matter where
                you are.
              </Description>
              <img
                src="./images/login-illustration.png"
                alt="Login illustration"
                width="320px"
                height="320px"
              />
            </div>
            <div style={{ padding: "30px" }}>
              <LoginForm
                handleLogin={(values) => {
                  const currentDate = new Date().toISOString();
                  const token = `${values.email}-${currentDate}`;
                  localStorage.setItem("X-token", token);
                  navigate("/contacts");
                }}
              />
            </div>
          </TwoColumnWrapper>
        </ModalWrapper>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default LoginPage;
