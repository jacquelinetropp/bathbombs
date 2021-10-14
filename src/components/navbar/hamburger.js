import React, {Fragment, useState} from "react";

import "./hamburger.styles.css";

const Hamburger = () => {
  return (
    <Fragment>
    <input type="checkbox" id="menu_checkbox" />
    <label>
      <div></div>
      <div></div>
      <div></div>
    </label>
    </Fragment>
  );
};

export default Hamburger;
