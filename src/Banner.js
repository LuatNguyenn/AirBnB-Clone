import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from './Search'
function Banner() {
  const [showSearch, setShowSearch] = useState(false); //default set to false

  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
        <Button
          className='banner__search'
          onClick={() => setShowSearch(!showSearch)}
          variant='outlined'
        >
          Search Date
        </Button>
      </div>
      <div className='banner__info'>
        <h1>lorem10 sal;dkfsdlk;afj;dlsakfj</h1>
        <h5>
          ;salkdjf;lskjfjaskldjioewurtaopsijflskdjfgasl;dkjgfsakldfjsa;lkfj
        </h5>
        <Button variant='outlined'>Explore</Button>
      </div>
    </div>
  );
}

export default Banner;
