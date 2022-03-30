import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { pageLinks } from "../assets/data";
import Navlist from "../components/navlist";

export default function Navbar() {
  const [modalOpen, setModal] = useState(false);

  const onClick = () => {
    !modalOpen ? setModal(true) : setModal(false);
  };

  return (
    <>
      <NavWrapper>
        <button className="c-navbar__button" onClick={onClick}>
          <p className="c-navbar__text">Read</p>
        </button>
      </NavWrapper>
      <Navlist list={pageLinks} isOpen={modalOpen} />
    </>
  );
}

const NavWrapper = styled.nav`
  position: absolute;
  left: 120%;

  .c-navbar__button {
    padding: 1vh 1vw;
    position: absolute;
  }
  .c-navbar__title {
    font-family: "Monofett";
    color: #eed202;
    text-align: center;
  }
  .l-navlist {
    position: absolute;
    margin-top: 5vh;
  }
`;
