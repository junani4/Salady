import React, { useState } from "react";
import { brandDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "../css/Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div id="dropdown">
        <div className="submenu">
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {brandDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
}

export default Dropdown;
