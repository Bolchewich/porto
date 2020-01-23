import React, { useState } from "react";
import { Headerlist } from "./Headerlist.js";

export const Header = () => {
  //const [state, setState] = useState(false);

  return (
    <div>
      <header>
        <Headerlist />
      </header>
    </div>
  );
};
