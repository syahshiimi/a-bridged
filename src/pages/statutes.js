import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";

const Statutes = () => {
  useEffect(() => {
    document.title = "Boudary & Survey Maps Statute";
  });
  return (
    <StatutesWrapper>
      <main className="l-homepage">
        <p> This is the statutes page</p>
      </main>
    </StatutesWrapper>
  );
};

const StatutesWrapper = styled.main``;

export default Statutes;
