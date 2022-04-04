import React from "react";
import styled from "styled-components";
import image from "../assets/img/epoch028_fake_A 1.png";
console.log(image);

const Home = () => {
  return (
    <HomeWrapper>
      <main className="l-homepage">
        <img src={image} alt="cover image" />
        <p className="c-homepage__imagetitle">live satellite view, 1000</p>
      </main>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .c-homepage__imagetitle {
    margin-top: 2vh;
    text-align: center;
    font-family: "Syne Mono";
    font-size: 0.65rem;
  }
  img {
    max-width: 250px;
  }
`;

export default Home;
