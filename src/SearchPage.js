import React from "react";
import "./SearchPage.css";
// import Button
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stay - 26 August to 30 August - 2 guests</p>
        <h1>Stay nearby</h1>
        <Button variant='outlined'>Cancellation</Button>
        <Button variant='outlined'>Type of place</Button>
        <Button variant='outlined'>Price</Button>
        <Button variant='outlined'>Rooms and bed</Button>
        <Button variant='outlined'>More filters</Button>
      </div>
      <SearchResult
        img='https://picsum.photos/seed/picsum/200/300'
        location='London'
        description='Condo with 4 rooms - 2 bedrooms and 2 bathrooms'
        title='Condo'
        star={4.73}
        price='$30/night'
        total='$117'
      />

      <SearchResult
        img='https://picsum.photos/seed/picsum/200/300'
        location='London'
        description='Condo with 4 rooms - 2 bedrooms and 2 bathrooms'
        title='Condo'
        star={4.73}
        price='$30/night'
        total='$117'
      />
    </div>
  );
}

export default SearchPage;
