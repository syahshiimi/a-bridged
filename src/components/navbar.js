import React, { useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";

import { pageLinks } from "../assets/data";
import Navlist from "../components/navlist";

export default function Navbar() {
  // bind on render
  useEffect(() => {
    Modal.setAppElement("body");
  });

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <NavWrapper>
      <button className="c-navbar__button" onClick={openModal}>
        <p className="c-navbar__text">Read</p>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={"c-navbar__modal"}
      >
        <Navlist list={pageLinks} isOpen={closeModal} />
      </Modal>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  .c-navbar__button {
    z-index: 1;
    position: fixed;
    padding: 1vh 2vw;
    border: none;
    background-color: var(--primary-clr-50);
  }

  .c-navbar__text {
    font-size: 0.9rem;
  }

  @media (min-width: 992px) {
  }
`;
