import React from "react";
import styled from "styled-components";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <HomeWrapper>
      <main className="l-homepage">
        <p> This is the homepage</p>
      </main>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main``;

export default Home;
