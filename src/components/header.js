import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <HeaderWrapper>
      <Link to="/home">
        <div className="l-header">
          <h1 className="c-header__title">A-bridged</h1>
        </div>
      </Link>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  a {
    text-decoration: none;
  }
  .c-header__title {
    font-family: "Libre Barcode 39";
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary-clr-0);
  }
`;
