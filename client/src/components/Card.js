import React from "react";

export default function Card(props) {
  return (
    <div className="card" onClick={props.isClicked}>
      <img src={props.coverImg} className="card--image" />
      <p className="card--title">{props.title}</p>
      <p className="card--position">{props.position}</p>
    </div>
  );
}
