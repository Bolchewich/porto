import React, { useState } from "react";

import { Link } from "react-router-dom";

export const Headerlist = () => {
  const [state, setState] = useState(false);

  return (
    <div>
      <ul className="headerUl">
        <li>
          <Link className="linkEdit linkEditHeader" to="/Hjem">
            Hjem
          </Link>
        </li>
        <li>
          <Link className="linkEdit linkEditHeader" to="/Om-meg">
            Om Meg
          </Link>
        </li>

        <li>
          <div className="dropdown">
            Prosjekt
            <div className="dropdown-content">
              <div>
                <Link className="linkEdit linkDropdown" to="/Bachelor">
                  Bacheloroppgave
                </Link>
                <br />
                <hr className="hrDropdown" />
                <Link className="linkEdit linkDropdown" to="/Prosjekter">
                  Rust + Wasm
                </Link>
                <br />

                <Link className="linkEdit linkDropdown" to="/Prosjekter">
                  Rust + Wasm
                </Link>
                <br />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
