import styled from "styled-components";

export default function Header() {
  return (
    <HeaderWrapper>
      <div className="l-header">
        <h1 className="c-header__title">A-bridged</h1>
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  .c-header__title {
    font-family: "Monofett";
    font-size: 3rem;
    font-weight: 800;
    color: var(--primary-clr-0);
  }
`;
