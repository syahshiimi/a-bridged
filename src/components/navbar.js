import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    console.log("click");
  }

  return (
    <NavWrapper>
      <div className="c-navbar">
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
          <Navlist list={pageLinks} />
        </Modal>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  .c-navbar {
    display: flex;
    justify-content: flex-end;
  }
  .c-navbar__button {
    position: fixed;
    padding: 1vh 2vw;
    border: none;
    background-color: var(--primary-clr-50);
  }
`;
