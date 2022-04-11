import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

// Import Components
import Converter from "../components/converter";
import SVY21 from "../components/svy21";
import MarkdownFile from "../pages/markdown/datumconverter.md";

const DatumConverter = () => {
  const [markdown, setMarkdown] = useState("");
  useEffect(() => {
    document.title = "Datum Converter";

    fetch(MarkdownFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <DatumWrapper>
      <div className="l-datumconverter">
        <section className="c-datumconverter">
          <h1>Convert between Datum Types</h1>
          <Converter />
          <p className="c-datumconverter__subtext">
            Currently the converter only supports WGS84 and SVY21 Datum
          </p>
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
  padding: 5vh 0vw;

  .c-datumconverter__subtext {
    padding: 2vh 15vw;
  }

  .c-aboutconverter {
    margin: 5vh 12vw 0vh 12vw;
  }
  p {
    margin: 1vh 0vw;
  }
`;

export default DatumConverter;
