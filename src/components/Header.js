import React, { useEffect } from "react";
import Values from "values.js";

import "./header.css";
const Header = ({ items }) => {
  const { color, setColor, error, setError, setList } = items;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (color) {
        let c = new Values(color).all(10);
        setList(c);
      } else {
        setError("empty input!");
      }
    } catch (error) {
      setError("enter valid color like #f25025");
    }
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setError(false);
    }, 2500);
    return () => {
      clearTimeout(time);
    };
  }, [error]);
  return (
    <form className="header" onSubmit={handleSubmit}>
      <h1>Color Generator</h1>
      <div className="control">
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f25025"
          className="search"
        />
        <button className="btn">Submit</button>
      </div>
      <div className="error">
        <p>{error}</p>
      </div>
    </form>
  );
};

export default Header;
