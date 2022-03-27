import styled from "styled-components";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <AppWrapper>
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
  height: 100vh;
  background: #e5e5e5;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "nav"
    "body"
    "footer";
`;

const BodyWrapper = styled.section`
  grid-area: body;
`;
const NavWrapper = styled.section`
  grid-area: nav;
`;

const FooterWrapper = styled.section`
  grid-area: footer;
`;
