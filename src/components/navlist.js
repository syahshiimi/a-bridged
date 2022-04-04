import { Link, NavLink } from "react-router-dom";

export default function Navlist({ list, isOpen }) {
  return (
    <>
      {list.map((item, index) => {
        const { pageID, url, text } = item;
        return (
          <ul className="c-navbar__ul" key={pageID}>
            <li className="c-navbar__links">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#F62210" : "",
                  };
                }}
                to={url}
              >
                {text}
              </NavLink>
            </li>
          </ul>
        );
      })}
    </>
  );
}
