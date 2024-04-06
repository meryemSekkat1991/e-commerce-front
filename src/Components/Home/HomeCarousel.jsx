import React from "react";
import Img1 from "../../Assets/img_1.png";
import Img2 from "../../Assets/women.jpg";
import Img3 from "../../Assets/img_2.png"
import "./Carousel.css";

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item  ">
        <img src={Img1} className="d-block w-100" alt="Men Collection "/>
        <div className="carousel-caption text-start" >
          <h5>new Collection</h5>
          <p>Collection Roi Des Parfums</p>
        </div>
      </div>
      <div className="carousel-item active">
        <img src={Img2} className="d-block w-100" alt="Parfum Collection "/>
        <div className="carousel-caption text-start">
          <h5>Collection 2024</h5>
          <p>Collection Roi Des Parfums</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={Img3} className="d-block w-100" alt="T-Shirt"/>
        <div className="carousel-caption text-start">
          <h5>Collection de parfums</h5>
          <p>Collection Roi Des Parfums</p>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default Carousel;
