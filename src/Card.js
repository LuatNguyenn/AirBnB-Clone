import React from "react";

// the reason to use props is that we can reuse them if the same design using destructuring
function Card({ src, title, description, price }) {
  return (
    <div className='card'>
      <img src={src} alt='' />
      <div className='card__info'>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default Card;
