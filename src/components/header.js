import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/home">
        <h1 className="c-header__title">A-bridged</h1>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  a {
    text-decoration: none;
  }
  .c-header__title {
    margin: 4vh 0vw 0vh;
    font-family: "Libre Barcode 39";
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary-clr-0);
  }

  @media (min-width: 992px) {
    .c-header__title {
      font-size: 3.5rem;
    }
  }
`;
