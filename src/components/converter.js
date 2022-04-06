import { BsArrowDownCircleFill } from "react-icons/bs";
import { IconBase, IconContext } from "react-icons";
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
        <IconContext.Provider
          value={{ size: "1.8rem", className: "c-converter__icon" }}
        >
          <div className="c-converter__iconcontainer">
            <BsArrowDownCircleFill />
          </div>
        </IconContext.Provider>
        <section className="l-converter__secondselection">
          <div className="c-converter__dropdowncontainer">
            <p className="c-converter__secondselection">To</p>
            <select className="c-converter__seconddropdown">
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

  .c-converter__firstinput,
  .c-converter__secondinput {
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
