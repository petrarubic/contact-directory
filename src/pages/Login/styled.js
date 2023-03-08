import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  font-family: "Hind";
`;

export const PageBackground = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("images/login-background.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  -webkit-filter: blur(3px);
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  padding: 20px 40px;
  width: 50%;
  height: 60%;
  background-color: #fff;
  box-shadow: 0 8px 32px 0 #043976;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
`;

export const TwoColumnWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 10px;
`;

export const LogoWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export const AppName = styled.h1`
  font-family: "Montserrat";
  font-size: 18px;
  color: #0974f1;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-size: 28px;
  color: #043976;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 12px;
  color: #a0a0a0;
`;
