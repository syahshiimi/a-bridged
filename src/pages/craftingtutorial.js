import React, { Link, useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import MarkdownFile from "../pages/markdown/the digitla compendium tutorial.md";

export default function CraftingTutorial() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(MarkdownFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <CraftingWrapper>
      <div className="c-craftingtutorial">
        <ReactMarkdown children={markdown} />
      </div>
    </CraftingWrapper>
  );
}

const CraftingWrapper = styled.main`
  margin-top: 3vh;
  .c-craftingtutorial > h1 {
    margin: 3vh 0vw;
  }
  .c-craftingtutorial > h2 {
    margin: 2vh 3vw;
    border-bottom: 1px solid var(--primary-clr-200);
    padding-bottom: 2px;
  }
  .c-craftingtutorial > h3 {
    margin: 2vh 5vw;
  }
  .c-craftingtutorial > ol {
    margin: 1vh 8vw;
  }
  .c-craftingtutorial > p {
    margin: 1vh 0vw;
  }
  .c-craftingtutorial > hr {
    margin: 2vh 0vw;
    border: 2px dotted var(--primary-clr-200);
  }
  .c-craftingtutorial > pre {
    margin: 2vh 5vw;
    code {
      font-style: italic;
      font-size: 0.75rem;
    }
  }
`;
