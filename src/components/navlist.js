import { Link } from "react-router-dom";

export default function Navlist({ list, isOpen }) {
  if (!isOpen) {
    return null;
  } else {
    return (
      <div className="l-navlist">
        {list.map((item, index) => {
          const { pageID, url, text } = item;
          return (
            <ul className="c-navbar__ul" key={pageID}>
              <li className="c-navbar__links">
                <Link to={url}>{text}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}
