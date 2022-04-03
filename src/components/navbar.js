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
    <NavWrapper>
      <div className="c-navbar">
        <button className="c-navbar__button" onClick={onClick}>
          <p className="c-navbar__text">Read</p>
        </button>
      </div>
      <div className="c-navbar__list">
        <Navlist list={pageLinks} isOpen={modalOpen} />
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  width: 100vw;

  .c-navbar {
    display: flex;
    justify-content: flex-end;
  }
  .c-navbar__button {
    padding: 1vh 2vw;
    border: none;
    background-color: var(--primary-clr-50);
  }
  .c-navbar__list {
    padding: 0vh 10vw;
  }
  .c-navbar__ul {
    text-decoration: none;
    list-style: none;
    padding: 1vh 0vw;
  }
`;
