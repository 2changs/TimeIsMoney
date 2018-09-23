import React from "react";
import './Card.css';

const Card = ({ zIndex = 0, imageUrl, title }) => (
  <div className="Card" style={{ zIndex }}>
  	<div>
  		<img className="img" src={ imageUrl } />
  	</div>	
  	<div>
  		<div>
  		 	{title}
  		</div>
  		<div>
  			distance
  		</div>
  	</div>
 	<div>
 		description
 	</div>
  </div>
);

export default Card;
