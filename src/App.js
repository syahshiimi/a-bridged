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
  padding: 0vh 6vw;
  justify-items: center;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header"
    "body"
    "footer";
`;

const HeaderWrapper = styled.section`
  grid-area: header;
`;
const NavWrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  z-index: 2;
`;

const BodyWrapper = styled.section`
  grid-area: body;
`;

const FooterWrapper = styled.section`
  grid-area: footer;
`;
