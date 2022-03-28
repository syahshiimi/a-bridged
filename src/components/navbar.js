import { Link } from "react-router-dom";
import styled from "styled-components";
import { pageLinks } from "../assets/data";

export default function Navbar() {
  console.log(pageLinks);
  return (
    <NavWrapper>
      <div className="l-navbar">
        {pageLinks.map((item, index) => {
          const { pageID, url, text } = item;
          return (
            <ul className="c-navbar__ul" key={pageID}>
              <li className="c-navbar__links">
                <Link to={url}>{text}</Link>
              </li>
            </ul>
          );
        })}
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
