import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import slide1 from './img/slide1.jpg'
import slide2 from './img/slide2.png'
import slide3 from './img/slide3.jpg'
import home from './img/home.jpg'
import './style.css';
const HomeComponent = () => {
    return (

<>


<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="slide"
      src={slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="slide"
      src={slide2}
      alt="Second slide"
    />
    <Carousel.Caption>
    
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="slide"
      src={slide3}
      alt="Third slide"
    />
    
    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<div className="content">
<div className="home">
<p className="hometext">
Shazam - прінт студія в Івано-Франківську.<br/>
Ми знаємо, як важливо підкреслити індивідуальність за допомогою прінта.<br/>
Ми беремося за  будь-яке замовленння.<br/>
Прінтування одягу проводиться на німецькому устаткуванні відповідно до передових технологій.
</p>
<br/>
<br/>
</div>
  <img
      className="home"
      src={home}
    />
</div>
</>

    );
};
export default HomeComponent;


