import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, closeModal, setcloseModal, title }) => {
  return (
    <>
      {closeModal && (
        <Overlay>
          <ContenedorModal>
            <ContenedorHeader>{ title ? title : 'Pon un titulo'} </ContenedorHeader>

            <BottonCerrar onClick={() => setcloseModal(!closeModal)}>
              <IoClose size={25} />
            </BottonCerrar>

            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default Modal;


const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContenedorModal = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 100px;
  background-color: #fff;
  position: relative;
  z-index: 999;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  @media(max-width: 800px) {
    max-width: 350px;
    margin: 10px;
  }
`;

const ContenedorHeader = styled.div`
  z-index: 999;
  margin-bottom: 15px;
`;

const BottonCerrar = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  width: 40px;
  border: none;
  background-color: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #818cf8;
  font-weight: bold;
`;
