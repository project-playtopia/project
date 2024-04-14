// Modal.js
import React from 'react';
import styled from 'styled-components';
import S from './style.js'

const ModalBackdrop = styled.div`
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
  width: 60%;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
`;

const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
      <S.Popup onClick={onClose}>X</S.Popup>
        {children}
      </ModalContent>
    </ModalBackdrop>
  );
};

export default Modal;
