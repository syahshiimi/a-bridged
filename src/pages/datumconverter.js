import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

// Import Components
import Converter from "../components/converter";
import SVY21 from "../components/svy21";
import MarkdownFile from "../pages/markdown/datumconverter.md";

const DatumConverter = () => {
  // Initialization
  var cv = new SVY21();

  // Computing SVY21 from Lat/Lon
  var lat = 1.2949192688485278;
  var lon = 103.77367436885834;
  var result = cv.computeSVY21(lat, lon);
  console.log("svy21 to lat/lon", result);

  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    fetch(MarkdownFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <DatumWrapper>
      <div className="l-datumconverter">
        <section className="c-datumconverter">
          <Converter />
          <h1>Convert between Datum Types</h1>
          <p>Currently the converter only supports WGS84 and SVY21 Datum</p>
        </section>
        <section className="c-aboutconverter">
          <h1 className="c-aboutconverter__title">About the converter</h1>
          <article className="c-aboutconverter__credits">
            <ReactMarkdown children={markdown} />
          </article>
        </section>
      </div>
    </DatumWrapper>
  );
};
const DatumWrapper = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;

  .c-aboutconverter {
    margin-top: 5vh;
  }
  p {
    margin: 1vh 0vw;
  }
`;

export default DatumConverter;
