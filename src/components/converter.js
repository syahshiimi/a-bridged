import { BsArrowDownSquareFill } from "react-icons/bs";
import styled from "styled-components";

export default function Converter() {
  return (
    <ConverterWrapper>
      <div className="l-converter">
        <h2 className="c-converter__title">Datum Converter</h2>
        <section className="l-converter__firstselection">
          <div className="c-converter__dropdowncontainer">
            <p className="c-converter__firstselection">From</p>
            <select className="c-converter__firstdropdown">
              <option value={"SYV21"}>SVY21</option>
              <option value={"WGS84"}>WGS84</option>
            </select>
          </div>
          <div className="c-converter__inputcontainer">
            <input
              type="text"
              className="c-converter__firstinput"
              placeholder="Northing"
            />
            <input
              type="text"
              className="c-converter__secondinput"
              placeholder="Easting"
            />
          </div>
        </section>
        <BsArrowDownSquareFill />
        <section className="l-converter__secondselection">
          <p className="c-converter__secondselection">From</p>
          <select className="c-converter__seconddropdown">
            <option value={"SYV21"}>SVY21</option>
            <option value={"WGS84"}>WGS84</option>
          </select>
        </section>
      </div>
    </ConverterWrapper>
  );
}

const ConverterWrapper = styled.main`
  justify-content: flex-start;
  background-color: var(--primary-clr-0);
  padding: 3vh;
  border-radius: 15px;
  opacity: 0.8;
  z-index: -1;

  .l-converter {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
  }

  .c-converter__title {
    color: var(--primary-clr-100);
    font-size: 1rem;
    text-decoration: underline;
    text-align: left;
  }

  .l-converter__firstselection {
    display: flex;
    flex-direction: column;
    padding: 2vh 0vw;
  }

  .c-converter__firstselection {
    font-weight: 700;
    color: var(--primary-clr-100);
  }
  .c-converter__dropdowncontainer {
    display: flex;
    flex-direction: row;
    margin: 1vh 0vw;
    padding: 0vh 1vh;
  }

  .c-converter__firstdropdown {
    margin: 0vh 2vw;
    font-size: 0.8rem;
  }

  .c-converter__inputcontainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    * {
      margin: 1vh 0vw;
    }
  }

  .c-converter__firstinput,
  .c-converter__secondinput {
    padding: 1.25vh;
    font-size: 0.85rem;
    opacity: 0.8;
    text-align: right;
  }

  .l-converter__secondselection {
    display: flex;
    padding: 2vh 0vw;
  }
`;
