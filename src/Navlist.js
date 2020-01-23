import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Navlist = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <ul className="sideUl">
        <li>
          <Link className="linkEdit linkEditSide" to="/Prosjekter">
            <i className="fas fa-folder fa-2x"></i>
          </Link>
          <hr className="hrDropdown" />
        </li>

        <li>
          <Link className="linkEdit linkEditSide" to="/Om-meg">
            <i className="fas fa-comment fa-2x"></i>
          </Link>
          <hr className="hrDropdown" />
        </li>
        <li>
          <Link className="linkEdit linkEditSide" to="/Prosjekter">
            <i className="fas fa-user-alt fa-2x"></i>

          </Link>
          <hr className="hrDropdown" />
        </li>
      </ul>
    </div>
  );
};
