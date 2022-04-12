import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Landing() {
  const [title, setTitle] = useState("A-bridged");
  const [subtext, setSubtext] = useState(
    "A-bridged is a research foundation founded in 1995 dedicated to land surveying and mapping."
  );

  useEffect(() => {
    document.title = "A-bridged";
  });
  return (
    <LandingWrapper>
      <div className="l-landing">
        <h1 className="c-landing__title">{title}</h1>
        <h5 className="c-landing__subtext">{subtext}</h5>
        <Link to="/home" className="c-landing__enter">
          Enter
        </Link>
      </div>
    </LandingWrapper>
  );
}
const LandingWrapper = styled.div`
  background-color: #e5e5e5;

  .l-landing {
    transition: all 3.5s ease-in-out;
    display: flex;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    padding: 0vh 7vw;

    transition: all 0.5s ease-in-out;
    background: radial-gradient(
      67.18% 67.18% at 50% 50%,
      rgba(247, 33, 14, 0.97) 0%,
      rgba(247, 33, 14, 0) 100%
    );
  }
  .c-landing__title {
    font-family: "Libre Barcode 128 Text";
    color: var(--primary-clr-50);
    text-align: center;
    font-size: 3.5rem;
  }

  .c-landing__subtext {
    margin: 0vh 4vw 2vh 4vw;
    text-align: center;
    color: #ffffff;
  }

  .c-landing__enter {
    text-align: center;
  }

  /* Tablet */

  @media (min-width: 992px) {
    .c-landing__title {
      font-size: 5rem;
      margin: 0;
    }
    .c-landing__subtext {
      margin: 2vh 15vw;
    }
    .c-landing__enter {
      font-size: 1.25rem;
    }
    /*
    :hover {
        text-decoration: underline;
        color: var(--primary-clr-50);
    }
*/
  }
`;
