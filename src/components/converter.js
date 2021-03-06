import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { BsArrowDownCircleFill, BsReception0 } from "react-icons/bs";
import styled from "styled-components";

import SVY21 from "../components/svy21";
//import WGSForm from "../components/wgsform";
//import SVYForm from "../components/svyform";

export default function Converter() {
  // Defaults
  const cv = new SVY21();
  useEffect(() => {
    // Set default form to WGS84 (lat/lon) and second form to SVY21
    setFirstDatum("WGS84");
    setSecondDatum("SVY21");
    console.log("there was a re-render");
  }, []);

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

  // Form components
  const [firstDatum, setFirstDatum] = useState("");
  const [secondDatum, setSecondDatum] = useState("");

  // Select Options Element

  const firstHandleChange = (e) => {
    setFirstDatum(e.target.value);

    // Reset display values
    setlonValue("");
    setlatValue("");
    setnorthValue("");
    seteastValue("");

    // Reset state variables for calculation
    setLatNum(0);
    setLonNum(0);
    setNorthNum(0);
    setEastNum(0);

    // Change Other Form (Second Form)
    // If first form is WGS84, seoncd form should not be WGS84, vice versa.
    if (e.target.value == "WGS84") {
      setSecondDatum("SVY21");
    } else {
      setSecondDatum("WGS84");
    }
  };

  const secondHandleChange = (e) => {
    setSecondDatum(e.target.value);

    // Reset display values
    setlonValue("");
    setlatValue("");
    setnorthValue("");
    seteastValue("");

    // Reset state variables for calculation
    setLatNum(0);
    setLonNum(0);
    setNorthNum(0);
    setEastNum(0);

    // Change Other Form (First Form)
    // If second form is WGS84, first form should not be WGS84, vice versa.
    if (e.target.value == "WGS84") {
      setFirstDatum("SVY21");
    } else {
      setFirstDatum("WGS84");
    }
  };

  // Set component render state
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

  // Calculate Input

  // DISPLAY ON FORM
  // useState hooks to determine form value that will be displayed.
  const [latValue, setlatValue] = useState("");
  const [lonValue, setlonValue] = useState("");
  const [northValue, setnorthValue] = useState("");
  const [eastValue, seteastValue] = useState("");

  // Hooks for CALCULATION
  // useState hooks to store actual num values for conversion
  const [latNum, setLatNum] = useState(0);
  const [lonNum, setLonNum] = useState(0);
  const [northNum, setNorthNum] = useState(0);
  const [eastNum, setEastNum] = useState(0);

  // Button Handler
  const handleConvert = (e) => {
    e.preventDefault();
    if (latNum != 0 || latNum != 0) {
      console.log("converting from WGS84 to SVY21...");
      convertToSVY(latNum, lonNum);
    } else if (northNum != 0 || eastNum != 0) {
      console.log("converting from SVY21 to WGS84...");
      convertToLatLon(northNum, eastNum);
    } else if (latNum == 0 || latNum == 0) {
      console.log("empty inputs");
    }
  };

  // Latitude Handler
  const handleLatInput = (e) => {
    e.preventDefault();
    // Set form display
    setlatValue(e.target.value);

    // Set Value for calculation
    setLatNum(parseFloat(e.target.value));
  };

  // Longitude Handler
  const handleLonInput = (e) => {
    e.preventDefault();
    // Set form display
    setlonValue(e.target.value);

    // Set Value for calculation
    setLonNum(parseFloat(e.target.value));
  };

  // Northing Handler
  const handleNorthInput = (e) => {
    setnorthValue(e.target.value);
    // Set display to show input value
    setnorthValue(e.target.value);

    // Set value for calculation
    setNorthNum(parseFloat(e.target.value));
  };

  // Easting Handler
  const handleEastInput = (e) => {
    seteastValue(e.target.value);
    // Set display to show input value
    seteastValue(e.target.value);

    // Set value for calculation
    setEastNum(parseFloat(e.target.value));
  };

  // Function to Convert to SVY21 Datum
  const convertToSVY = (lat, lon) => {
    const newResults = cv.computeSVY21(lat, lon);
    const { N, E } = newResults;
    setnorthValue(N);
    seteastValue(E);
  };

  // Function to convert to WGS84 Datum
  const convertToLatLon = (northValue, eastValue) => {
    const resultsLatLon = cv.computeLatLon(northValue, eastValue);
    const { lat, lon } = resultsLatLon;
    setlatValue(lat);
    setlonValue(lon);
  };

  // Component Render
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
          <form className="c-converter__inputcontainer">{FirstForm()}</form>
        </section>
        <IconContext.Provider
          value={{ size: "1.8em", className: "c-converter__icon" }}
        >
          <div className="c-converter__iconcontainer">
            <BsArrowDownCircleFill onClick={handleConvert} />
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
  padding: 2.5vh;
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
    margin: 1vh 0vw;
  }

  .c-converter__icon {
    color: var(--primary-clr-50);
  }

  .c-converter__title {
    color: var(--primary-clr-100);
    font-size: 1rem;
    text-decoration: underline;
    text-align: left;
    margin-bottom: 0.5vh;
  }

  /* Top Section */
  .l-converter__firstselection {
    display: flex;
    flex-direction: column;
    padding: 0vh 0vw;
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
    padding: 0.5vh;
  }

  .c-converter__inputcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      margin: 0.3vh 0vw;
    }
  }

  .c-converter__latitudeinput,
  .c-converter__longitudeinput,
  .c-converter__northinginput,
  .c-converter__eastinginput {
    padding: 1.25vh;
    font-size: 1rem;
    font-family: "Syne";
    font-weight: 400;
    opacity: 0.8;
    text-align: right;
  }

  /* Second Selection */
  .l-converter__secondselection {
    display: flex;
    flex-direction: column;
    padding: 0vh 0vw;

    /* we remove the top margin in the second form section */
    .c-converter__dropdowncontainer {
      margin-top: 0;
    }
  }
  .c-converter__secondselection {
    font-weight: 700;
    color: var(--primary-clr-100);
  }

  .c-converter__seconddropdown {
    margin: 0vh 2vw;
    font-size: 0.8rem;
    padding: 0.5vh;
  }

  @media (min-width: 992px) {
    margin: 2vh 15vw;
    padding: 2vh;

    .c-converter__title {
      font-size: 1.125rem;
    }
  }
`;
