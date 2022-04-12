import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image from "../assets/img/epoch028_fake_A 1.png";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <HomeWrapper>
      <main className="l-homepage">
        <img src={image} alt="cover image" />
        <p className="c-homepage__imagetitle">live satellite view, 1000</p>
      </main>
      <section className="l-homepage__event">
        <i>Upcoming</i>
        <p>
          <i>substance of a minute, recorded by a machine and a few others</i>,
          now showing for <strong>'How We Learn(t)'</strong> at Gillman Barracks
          Block 9
        </p>
      </section>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1 1 auto;

  .c-homepage__imagetitle {
    margin-top: 2vh;
    text-align: center;
    font-family: "Syne Mono";
    font-size: 0.85rem;
  }
  img {
    max-width: 250px;
  }

  .l-homepage__event {
    margin-top: 10vh;
    text-align: center;
  }

  /* tablet */
  @media (min-width: 992px) {
    .l-homepage__event {
      margin: 10vh 25vw 0vh;
    }
    img {
      max-width: 300px;
    }
  }
`;

export default Home;
