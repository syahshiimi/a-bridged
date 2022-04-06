import React from "react";
import styled from "styled-components";
import SVY21 from "../components/svy21";

// Import Components
import Converter from "../components/converter";

const DatumConverter = () => {
  // Initialization
  var cv = new SVY21();

  // Computing SVY21 from Lat/Lon
  var lat = 1.2949192688485278;
  var lon = 103.77367436885834;
  var result = cv.computeSVY21(lat, lon);
  console.log("svy21 to lat/lon", result);

  return (
    <DatumWrapper>
      <div className="l-datumconverter">
        <section className="c-datumconverter">
          <h1>Convert between Datum Types</h1>
          <p>Currently the converter only supports WGS84 and SVY21 Datum</p>
        </section>
        <section className="c-aboutconverter"></section>
        <h1 className="c-aboutconverter__title">About the converter</h1>
        <p>
          This caonverter would not be possible without the contributions by
          many others done before a-bridged.
        </p>
        <p>
          The converter would like to thank linz.nz, for providing the formula
          needed to convert between datums.
        </p>
        <p>
          The cnverter would like tot thank this Github repositiory for
          providing the implementation on JavaScript.
        </p>
        <p>
          None of these would be possible without the contribution of others.
        </p>
      </div>
    </DatumWrapper>
  );
};

const DatumWrapper = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;

  .c-aboutconverter {
    margin-top: 5vh;
  }
  p {
    margin: 1vh 0vw;
  }
`;

export default DatumConverter;
