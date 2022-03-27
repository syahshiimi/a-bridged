import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Landing() {
  const axios = require("axios");
  const [title, setTitle] = useState("A-bridged");
  const [subtext, setSubtext] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Make requests

  //  axios
  //    .get("http://localhost:1337/api/landing-page")
  //    .then((response) => {
  //      // handle success
  //      const { data } = response.data;
  //      setTitle(data.attributes.Title);
  //      setSubtext(data.attributes.Subtext);
  //    })
  //    .catch(function (error) {
  //      // handle error
  //      console.log(error);
  //      setError(true);
  //    })
  //    .then(function () {});
  //
  //  // Return error if axios call does not return a value
  //
  //  if (loading) return <p> Loading... 🥺 </p>;
  //  if (error) return <p> Error :( </p>;

  return (
    <LandingWrapper>
      <h1 className="c-landing__title">{title}</h1>
      <h5 className="c-landing__subtext">{subtext}</h5>
      <Link to="/home" className="c-landing__enter">
        Enter
      </Link>
    </LandingWrapper>
  );
}
const LandingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background: radial-gradient(
    65.89% 65.89% at 50% 50%,
    rgba(247, 33, 14, 0.75) 0%,
    rgba(247, 33, 14, 0) 100%
  );
  /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */

  .c-landing__title {
    font-family: "Monofett";
    color: #eed202;
    text-align: center;
  }

  .c-landing__subtext {
    margin: 2vh 0vw;
    text-align: center;
    color: #ffffff;
  }

  .c-landing__enter {
    text-align: center;
  }

  //////////////////
  ///// Desktop ////
  //////////////////

  @media (min-width: 1280px) {
    .c-landing__subtext {
      padding: 0vh 30vw;
    }
  }
`;
