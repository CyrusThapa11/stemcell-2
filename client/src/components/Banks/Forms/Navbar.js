import React from "react";
// import classes from "../Css/Navbar.module.css";

import classes from "../../../Css/Navbar.module.css";
// import classes from "../../../Css/form.module.css";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <div className={classes.img}>
          <img src="/media/logo.svg" alt="Logo" />
        </div>

        <div className={classes.logo_head}>
          <span style={{ fontFamily: "cursive", fontSize: "20px" }}>Stem</span>
          <span
            style={{
              color: "#b65ad8",
              fontSize: "20px",
              letterSpacing: "5px",
              marginRight: "0px",
            }}
          >
            Cell
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
