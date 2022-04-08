import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsArrowDownCircleFill } from "react-icons/bs";
import styled from "styled-components";

import SVY21 from "../components/svy21";

export default function Converter() {
  const WGSForm = () => {
    return (
      <>
        <input
          type="text"
          className="c-converter__latitudeinput"
          placeholder="Latitude"
          value={latValue}
          onInput={handleLatInput}
        />{" "}
        <input
          type="text"
          className="c-converter__longitudeinput"
          placeholder="Longitude"
          value={lonValue}
          onInput={handleLonInput}
        />{" "}
      </>
    );
  };

  const SVYForm = () => {
    return (
      <>
        <input
          type="text"
          className="c-converter__northinginput"
          placeholder="Northing"
          value={northValue}
          onInput={handleNorthInput}
        />{" "}
        <input
          type="text"
          className="c-converter__eastinginput"
          placeholder="Easting"
          value={eastValue}
          onInput={handleEastInput}
        />{" "}
      </>
    );
  };

  // Initialization
  var cv = new SVY21();

  // Set WGS84 as the default
  useEffect(() => {
    setFirstDatum("WGS84");
    setSecondDatum("SVY21");
  }, []);

  // Form components
  // Set default form to WGS84 (lat/lon)
  const [firstDatum, setFirstDatum] = useState("");
  const [secondDatum, setSecondDatum] = useState("");

  const [latValue, setlatValue] = useState("");
  const [lonValue, setlonValue] = useState("");
  const [northValue, setnorthValue] = useState("");
  const [eastValue, seteastValue] = useState("");

  const conversionResults = (latValue, lonValue) => {
    const newResults = cv.computeSVY21(latValue, lonValue);
    const { N, E } = newResults;
    console.log(newResults);
    setnorthValue(parseInt(N));
    seteastValue(parseInt(E));
  };

  // Select Options

  const firstHandleChange = (e) => {
    setFirstDatum(e.target.value);
    // Reset if change datum
    setlonValue("");
    setlatValue("");
    setnorthValue("");
    seteastValue("");

    // Change Datum Render
    if (e.target.value == "WGS84") {
      setSecondDatum("SVY21");
    } else {
      setSecondDatum("WGS84");
    }
  };

  const secondHandleChange = (e) => {
    setSecondDatum(e.target.value);
    // Reset if change datum
    setlonValue("");
    setlatValue("");
    setnorthValue("");
    seteastValue("");
    // Change Datum Render
    if (e.target.value == "WGS84") {
      setFirstDatum("SVY21");
    } else {
      setFirstDatum("WGS84");
    }
  };

  // Input Toggling

  const handleLatInput = (e) => {
    setlatValue(e.target.value);
  };

  const handleLonInput = (e) => {
    setlonValue(e.target.value);
    conversionResults(latValue, lonValue);
  };

  const handleNorthInput = (e) => {
    setnorthValue(e.target.value);
  };

  const handleEastInput = (e) => {
    seteastValue(e.target.value);
  };

  const FirstForm = () => {
    if (firstDatum == "WGS84") {
      return <>{WGSForm()}</>;
    } else {
      return <>{SVYForm()}</>;
    }
  };

  const SecondForm = () => {
    if (secondDatum == "WGS84") {
      return <>{WGSForm()}</>;
    } else {
      return <>{SVYForm()}</>;
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
          <form className="c-converter__inputcontainer" method="get">
            {FirstForm()}
          </form>
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
          <form className="c-converter__inputcontainer">{SecondForm()}</form>
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

  / * Top Section * /
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

  / * Bottom Section *
          /
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
