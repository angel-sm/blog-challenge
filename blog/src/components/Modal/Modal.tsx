import React from "react";
import styled, { keyframes } from "styled-components";

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Background>
      <ModalContent>
        <button onClick={onClose}>Close</button>
        {content && content()}
      </ModalContent>
    </Background>
  );
};

export default Modal;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  animation: ${fadeIn} 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  max-width: 600px;
  min-width: 600px;
`;

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9),
    rgba(16, 16, 16, 0.9),
    rgba(27, 26, 26, 0.9),
    rgba(36, 35, 36, 0.9),
    rgba(46, 45, 46, 0.9),
    rgba(54, 54, 55, 0.9),
    rgba(63, 63, 64, 0.9),
    rgba(72, 72, 73, 0.9),
    rgba(82, 82, 83, 0.9),
    rgba(93, 93, 94, 0.9),
    rgba(104, 104, 104, 0.9),
    rgba(115, 115, 115, 0.9),
    rgba(115, 115, 115, 0.9)
  );
`;
