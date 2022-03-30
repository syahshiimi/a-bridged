import React, { Link, useEffect, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import MarkdownFile from "/Users/syahrulanuar/a-bridged/frontend/src/pages/markdown/the digitla compendium tutorial.md";

export default function CraftingTutorial() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(MarkdownFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="c-craftingtutorial">
      This is the crafting tutorial page.
      <ReactMarkdown children={markdown} />
    </div>
  );
}

const CraftingWrapper = styled.main``;
