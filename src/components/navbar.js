import styled from "styled-components";

export default function Navbar() {
  return (
    <NavWrapper>
      <div className="l-navbar">
        <h1 className="c-navbar__title"> A-bridged</h1>
      </div>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  .c-navbar__title {
    font-family: "Monofett";
    color: #eed202;
    text-align: center;
  }
`;
