import React, { useState, useEffect } from "react";
import "./singlecolor.css";
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const bcg = rgb.join(",");
  const hex = `#${hexColor}`;
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    let time = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(time);
  }, [alert]);
  return (
    <div className="singlecolor">
      <div
        className={`bk color ${index > 10 && "color-light"}`}
        style={{ backgroundColor: `rgb(${bcg})` }}
        onClick={() => {
          setAlert(true);
          navigator.clipboard.writeText(hex);
        }}
      >
        {alert && <p className="copy">copied to clipboard</p>}
        <p>{weight}%</p>
        <p className="color-name">{hex}</p>
      </div>
    </div>
  );
};

export default SingleColor;
