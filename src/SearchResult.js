import React from "react";
import "./SearchResult.css";
// this will received data from other components as Props
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  // destructing props
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className='searchResult'>
      <img src={img} alt='' />
      <FavoriteBorderIcon className='searchResult__heart' />
      <div className='searchResult__info'>
        <div className='searchResult__infoTop'>
          <span>{location}</span><br/>
          <h3>{title}</h3><br/>
          <span>____</span><br/>
          <span>{description}</span>
        </div>

        <div className='searchResult__infoBottom'>
          <div className='searchResult__stars'>
            <StarIcon className='searchResult__star' />
            <p>
              <strong>{star}</strong>
            </p>
            <div className="searchResult__price">
                <h2>{price}</h2>
                <p>{total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
