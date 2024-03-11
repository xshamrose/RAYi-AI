import React from 'react';

const Header = ({ title, subtitle }) => {
 return (
    <>
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "nowrap",
        alignItems: "center",
        backgroundImage: "linear-gradient(#69b1ff, #e9f0f2)",
        width: "100%",
      }}
    >
      <h1>{title}</h1>
      <p style={{ marginLeft: "40px" }}>
        {subtitle}
      </p>
    </div>
    </>
 );
};

export default Header;
