import React from "react";

function Fact(props) {
  console.log("Props", props);
  return (
    <div className="fact-wrapper text-center container">
      <h1 className="artist-name">{props.data.artist}</h1>
      <h3 className="album-name">{props.data.album}</h3>
      <p className="fact-text">{props.data.text}</p>
    </div>
  );
}

export default Fact;
