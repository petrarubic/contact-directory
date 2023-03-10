import React from "react";
import styled from "styled-components";
import { FaRegWindowClose } from "react-icons/fa";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  width: 600px;
  height: 500px;
  border-radius: 4px;
  overflow-y: scroll;
`;

const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ModalButton = styled.div`
  margin: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

function CustomModal({ children, onClose, isOpen, heading, description }) {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <ModalHeader>
              <ModalButton onClick={onClose}>
                <FaRegWindowClose size={20} />
              </ModalButton>
            </ModalHeader>
            <h1>{heading}</h1>
            <p>{description}</p>
            <div style={{ padding: "0px 120px" }}>{children}</div>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}

export default CustomModal;
