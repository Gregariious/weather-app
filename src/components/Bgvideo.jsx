import React from "react";
import rain from "../assets/raining.mp4";
const Bgvideo = () => {
  return <div className="rain">{<video src={rain} autoPlay loop muted />}</div>;
};

export default Bgvideo;
