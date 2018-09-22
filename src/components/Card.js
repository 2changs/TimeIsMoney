import React from "react";
import './Card.css';

const Card = ({ zIndex = 0, children }) => (
  <div className="Card" style={{ zIndex }}>{children}</div>
);

export default Card;
