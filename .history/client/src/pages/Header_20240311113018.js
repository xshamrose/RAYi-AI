// Header.js
import React from "react";

const Header = () => {


 return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "nowrap",
          alignItems: "center",
          backgroundImage: "linear-gradient(#69b1ff, #e9f0f2)",
          width: "100%",
        }}
      >
        <h1>{title}</h1>
      </div>
      <div>
        <p style={{ marginLeft: "40px" }}>
          {headerState.subtitle}
        </p>
      </div>
    </>
 );
};

export default Header;
