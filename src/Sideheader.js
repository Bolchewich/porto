import React, { useState } from "react";
import { Navlist } from "./Navlist.js";
export const Test = () => {
  const [state, setState] = useState(false);

  return (
    <div className={state ? "test test-hover" : "test"}>
      <Navlist />
    </div>
  );
};
