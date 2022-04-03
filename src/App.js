import styled from "styled-components";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Header from "./components/header";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <NavWrapper>
        <Navbar />
      </NavWrapper>
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  display: grid;
  background: #e5e5e5;
  min-height: 100vh;
  justify-items: center;
  grid-template-columns: auto;
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "header"
    "nav"
    "body"
    "footer";
  background: radial-gradient(
    65.89% 65.89% at 50% 50%,
    rgba(247, 33, 14, 0.75) 0%,
    rgba(247, 33, 14, 0) 100%
  );
`;

const HeaderWrapper = styled.header`
  grid-area: header;
`;
const NavWrapper = styled.nav`
  grid-area: nav;
`;

const BodyWrapper = styled.article`
  grid-area: body;
`;

const FooterWrapper = styled.footer`
  grid-area: footer;
`;
