import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import "./Card.css";



function Home() {
  return (
    <div className='home'>
      <Banner />
      <div className='home__section'>
        <Card
          src='https://picsum.photos/id/179/200/300'
          title='Awesome'
          description='this is an awesome place'
          price='$150'
        />
        <Card
          src='https://picsum.photos/id/179/200/300'
          title='Awesome'
          description='this is an awesome place'
          price='$150'

        />
        <Card
          src='https://picsum.photos/id/179/200/300'
          title='Awesome'
          description='this is an awesome place'
          price='$150'
        />
      </div>


      <div className='home__section'>
        <Card
          src='https://picsum.photos/id/179/200/300'
          title='Awesome'
          description='this is an awesome place'
          price='$150'
        />
        <Card
          src='https://picsum.photos/id/179/200/300'
          title='Awesome'
          description='this is an awesome place'
          price='$150'
        />
        <Card
          src='https://picsum.photos/id/179/200/300'
          title='Awesome'
          description='this is an awesome place'
          price='$150'
        />
      </div>
    </div>
  );
}

export default Home;
