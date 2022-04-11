import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";

const BaseSeven = () => {
  useEffect(() => {
    document.title = "Pillar 7/Base 7";
  });
  return (
    <BaseSevenWrapper>
      <main className="l-homepage">
        <p> This is the the base 7 page</p>
      </main>
    </BaseSevenWrapper>
  );
};

const BaseSevenWrapper = styled.main``;

export default BaseSeven;
