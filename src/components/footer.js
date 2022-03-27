// import react-icons
import { RiDiscordLine, RiTwitterLine, RiInstagramLine } from "react-icons/ri";

import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <p className="c-footer__title"> A - Bridged </p>{" "}
      <div className="c-footer__iconcontainer">
        <RiDiscordLine className="c-footer__discord" />
        <RiTwitterLine className="c-footer__twitter" />
        <RiInstagramLine className="c-footer__instagram" />
      </div>{" "}
    </FooterWrapper>
  );
}

const FooterWrapper = styled.section`
  /* make content center */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 1vh;
  margin-bottom: 4vh;

  .c-footer__title {
    display: flex;
    font-size: 1.25rem;
    font-family: "Monofett";
    color: var(--primary-clr-100);
    padding: 0;
    margin: 0;
  }

  .c-footer__iconcontainer {
    display: flex;
    flex-direction: row;
    column-gap: 1vw;
  }

  .c-footer__discord {
    display: flex;
    align-items: center;
    color: var(--primary-clr-300);
  }

  .c-footer__twitter {
    display: flex;
    align-items: center;
    color: var(--primary-clr-300);
  }

  .c-footer__instagram {
    display: flex;
    align-items: center;
    color: var(--primary-clr-300);
  }
`;

export default Footer;
