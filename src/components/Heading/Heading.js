import React from "react";
import "./Heading.css";

const Heading = (props) => {
  return (
    <div>
      <marquee className="Heading">{props.heading.toUpperCase()}</marquee>
    </div>
  );
};

export default Heading;
