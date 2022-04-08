import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useRef, useState } from "react";
import { IconBase, IconContext } from "react-icons";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { setElement } from "react-modal/lib/helpers/ariaAppHider";
import styled from "styled-components";

import SVY21 from "../components/svy21";

export default function Converter() {
  // Initialization
  var cv = new SVY21();

  // Computing SVY21 from Lat/Lon
  var lat = 1.2949192688485278;
  var lon = 103.77367436885834;
  var result = cv.computeSVY21(lat, lon);
  //  console.log("svy21 to lat/lon", result);

  // Form components
  // Set default form to WGS84 (lat/lon)
  const [firstDatum, setFirstDatum] = useState("WGS84");
  const [secondDatum, setSecondDatum] = useState("SVy21");
  const [latValue, setlatValue] = useState("");
  const [lonValue, setlonValue] = useState("");
  const [northValue, setnorthValue] = useState("");
  const [eastValue, seteastValue] = useState("");

  const firstHandleChange = (e) => {
    setFirstDatum(e.target.value);
    console.log("click");
  };

  const secondHandleChange = (e) => {
    setSecondDatum(e.target.value);
  };

  const FirstForm = () => {
    if (firstDatum == "WGS84") {
      return (
        <form className="c-converter__inputcontainer">
          <input
            type="text"
            className="c-converter__latitudeinput"
            placeholder="Latitude"
            value={latValue}
            onInput={(e) => setlatValue(e.target.value)}
          />{" "}
          <input
            type="text"
            className="c-converter__longitudeinput"
            placeholder="Longitude"
            value={lonValue}
            onInput={(e) => setlonValue(e.target.value)}
          />{" "}
        </form>
      );
    } else {
      return (
        <form className="c-converter__inputcontainer">
          <input
            type="text"
            className="c-converter__northinginput"
            placeholder="Northing"
            value={northValue}
            onInput={(e) => setnorthValue(e.target.value)}
          />{" "}
          <input
            type="text"
            className="c-converter__eastinginput"
            placeholder="Easting"
            value={eastValue}
            onInput={(e) => seteastValue(e.target.value)}
          />{" "}
        </form>
      );
    }
  };

  const SecondForm = () => {
    if (secondDatum == "WGS84") {
      return (
        <form className="c-converter__formcontainer">
          <div className="c-converter__inputcontainer">
            <input
              type="text"
              className="c-converter__latitudeinput"
              placeholder="Latitude"
            />{" "}
            <input
              type="text"
              className="c-converter__longitudeinput"
              placeholder="Longitude"
            />{" "}
          </div>
        </form>
      );
    } else {
      return (
        <form className="c-converter__formcontainer">
          <div className="c-converter__inputcontainer">
            <input
              type="text"
              className="c-converter__northinginput"
              placeholder="Northing"
            />{" "}
            <input
              type="text"
              className="c-converter__eastinginput"
              placeholder="Easting"
            />{" "}
          </div>
        </form>
      );
    }
  };

  return (
    <ConverterWrapper>
      <div className="l-converter">
        <h2 className="c-converter__title">Datum Converter</h2>
        <section className="l-converter__firstselection">
          <div className="c-converter__dropdowncontainer">
            <p className="c-converter__firstselection">From</p>
            <select
              className="c-converter__firstdropdown"
              onChange={firstHandleChange}
              value={firstDatum}
            >
              <option value="SYV21">SVY21</option>
              <option value="WGS84">WGS84</option>
            </select>
          </div>
          {FirstForm()}
        </section>
        <IconContext.Provider
          value={{ size: "1.8em", className: "c-converter__icon" }}
        >
          <div className="c-converter__iconcontainer">
            <BsArrowDownCircleFill />
          </div>
        </IconContext.Provider>
        <section className="l-converter__secondselection">
          <div className="c-converter__dropdowncontainer">
            <p className="c-converter__secondselection">To</p>
            <select
              className="c-converter__seconddropdown"
              onChange={secondHandleChange}
              value={secondDatum}
            >
              <option value="SYV21">SVY21</option>
              <option value="WGS84">WGS84</option>
            </select>
          </div>
          <SecondForm />
        </section>
      </div>
    </ConverterWrapper>
  );
}

const ConverterWrapper = styled.main`
  justify-content: flex-start;
  background-color: var(--primary-clr-0);
  margin: 2vh;
  padding: 3vh;
  border-radius: 15px;
  opacity: 0.8;
  z-index: -1;

  .l-converter {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
  }

  .c-converter__iconcontainer {
    display: flex;
    justify-content: center;
  }

  .c-converter__icon {
    color: var(--primary-clr-50);
  }

  .c-converter__title {
    color: var(--primary-clr-100);
    font-size: 1rem;
    text-decoration: underline;
    text-align: left;
  }

  /* Top Section */
  .l-converter__firstselection {
    display: flex;
    flex-direction: column;
    padding: 1vh 0vw;
  }

  .c-converter__dropdowncontainer {
    display: flex;
    flex-direction: row;
    margin: 1vh 0vw;
    padding: 0vh 1vh;
  }

  .c-converter__firstselection {
    font-weight: 700;
    color: var(--primary-clr-100);
  }

  .c-converter__firstdropdown {
    margin: 0vh 2vw;
    font-size: 0.8rem;
  }

  .c-converter__inputcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    }
    * {
      margin: 0.5vh 0vw;
    }
  }

  .c-converter__latitudeinput,
  .c-converter__longitudeinput,
  .c-converter__northinginput,
  .c-converter__eastinginput {
    padding: 1.25vh;
    font-size: 0.85rem;
    font-family: 'Syne';
    font-weight: 400;
    opacity: 0.8;
    text-align: right;
  }

  /* Bottom Section */
  .l-converter__secondselection {
    display: flex;
    flex-direction: column;
    padding: 0vh 0vw;
  }
  .c-converter__secondselection {
    font-weight: 700;
    color: var(--primary-clr-100);
  }

  .c-converter__seconddropdown {
    margin: 0vh 2vw;
    font-size: 0.8rem;
  }
`;
